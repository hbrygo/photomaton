const ShootButton = ({ children, onClick }) => {
  return (
    <div className="shoot-button-container">
      <button onClick={onClick}>📸</button>
    </div>
  );
};

export default ShootButton;
