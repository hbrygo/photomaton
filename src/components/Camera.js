import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1696,
  height: 1200,
  facingMode: 'user',
};

const Camera = ({ webcamRef, counter, hidden }) => {
  return (
    <Webcam
      hidden={hidden}
      audio={false}
      height={498}
      ref={webcamRef}
      screenshotFormat='image/jpeg'
      width={885.333}
      videoConstraints={videoConstraints}
      className={`flip ${counter < 0 ? 'blink_me' : ''}`}
    />
  );
};

export default Camera;
