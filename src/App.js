import React, { useState, useRef, useEffect } from 'react';

import './styles/App.css';
import storage from './firebase';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

import Background from './components/Background';
import Camera from './components/Camera';
import ShootButton from './components/ShootButton';
import Counter from './components/Counter';
import PreviewGrid from './components/PreviewGrid';
import Preview from './components/Preview';
import ViewPic from './components/ViewPic';

function App() {
  const [startPicture, setStartPicture] = useState(false);
  const [counter, setCounter] = useState(2);
  const [pic, setPic] = useState([]);
  const [preview, setPreview] = useState(false);
  const [pictureIndex, setPictureIndex] = useState(-1);

  const webcamRef = useRef(null);

  useEffect(() => {
    const capture = async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const downloadUrl = await upload(imageSrc);
      let obj = {
        src: imageSrc,
        download: downloadUrl,
      };
      if (imageSrc !== null) setPic((oldArray) => [...oldArray, obj]);
    };
    if (counter === -2) {
      resetCounter();
      capture();
    }
  }, [counter]);

  useEffect(() => {
    if (startPicture) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  function takePicture() {
    if (preview) {
      setPreview(false);
    } else {
      //reset counter
      setCounter(2);
      //trigger picture or not
      setStartPicture(!startPicture);
    }
  }

  async function upload(base64String) {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const storageRef = ref(storage, `images/pic-${Date.now()}`);
      const snapshot = await uploadString(
        storageRef,
        base64String,
        'data_url'
      ).catch((e) => {
        console.log(e);
      });
      const downloadUrl = await getDownloadURL(snapshot.ref);
      return downloadUrl;
    } else {
      return false;
    }
  }

  function displayImage(index) {
    setPictureIndex(index);
    setPreview(pic[index].src);
  }

  function resetCounter() {
    setStartPicture(false);
    setCounter(2);
  }

  return (
    <Background>
      <Counter start={startPicture} counter={counter}></Counter>
      <ViewPic preview={preview}></ViewPic>
      <Camera webcamRef={webcamRef} counter={counter} hidden={preview}></Camera>
      <ShootButton onClick={takePicture}></ShootButton>
      <PreviewGrid>
        {pic.map((elem, index) => {
          return (
            <Preview
              img={elem}
              key={index}
              index={index}
              preview={preview && index === pictureIndex}
              onClick={() => {
                displayImage(index);
              }}
            ></Preview>
          );
        })}
      </PreviewGrid>
    </Background>
  );
}

export default App;
