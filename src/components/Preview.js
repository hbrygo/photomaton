import ShowQrcode from './ShowQrcode';

const Preview = ({ index, img, onClick, preview }) => {
  return (
    <div key={index} className='image-element' onClick={onClick}>
      {preview ? (
        <ShowQrcode download={img.download}></ShowQrcode>
      ) : (
        <img alt={'preview'} src={img.src} className='flip'></img>
      )}
    </div>
  );
};

export default Preview;
