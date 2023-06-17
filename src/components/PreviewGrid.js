const PreviewGrid = ({ children }) => {
  return (
    <div className="preview-container-parent">
      <div className="preview-container">{children}</div>
    </div>
  );
};

export default PreviewGrid;
