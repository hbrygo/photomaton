const logo = require('../assets/bg_logo.png');

const Background = ({ children, counter }) => {
  return (
    <div className={`bg ${counter < 1 ? 'bg-flash' : ''}`}>
      <div className="bg-logo">
        <img alt={'logo'} width={500} src={logo}></img>
      </div>
      <div className={`main-container`}>{children}</div>
    </div>
  );
};

export default Background;
