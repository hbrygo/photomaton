const ViewPic = ({ preview }) => {
  return (
    preview && (
      <div className='preview-pic-container'>
        <img alt={'previewpic'} src={preview} className='flip' />
      </div>
    )
  );
};

export default ViewPic;
