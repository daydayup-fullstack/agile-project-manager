import React from "react";
import "./Dropzone.css";

export const useDropzone = (ref) => {
  const [isFilesDragging, setIsFilesDragging] = React.useState(false);
  let dragCounter = 0;
  const handleFiles = (files) => {
    console.log([...files][0]);

    // handleUpload(files);
  };

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  function handleDragEnter(e) {
    preventDefault(e);
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsFilesDragging(true);
    }
  }

  function handleDragLeave(e) {
    preventDefault(e);
    dragCounter--;
    if (dragCounter > 0) return;
    setIsFilesDragging(false);
  }

  function handleDragOver(e) {
    preventDefault(e);
  }

  function handleDrop(e) {
    preventDefault(e);
    setIsFilesDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
      dragCounter = 0;
    }
  }

  React.useEffect(() => {
    const element = ref.current;
    element.addEventListener("dragenter", handleDragEnter, false);
    element.addEventListener("dragleave", handleDragLeave, false);
    element.addEventListener("dragover", handleDragOver, false);
    element.addEventListener("drop", handleDrop, false);

    return () => {
      element.removeEventListener("dragenter", handleDragEnter);
      element.removeEventListener("dragleave", handleDragLeave);
      element.removeEventListener("dragover", handleDragOver);
      element.removeEventListener("drop", handleDrop);
    };
  }, [ref]);

  return [isFilesDragging];
};

const Dropzone = ({ handleUpload, children, toggle_files_dragging }) => {
  const dropzone = React.useRef();

  return (
    <div className={"Dropzone"} ref={dropzone}>
      {children}
    </div>
  );
};

export default Dropzone;
