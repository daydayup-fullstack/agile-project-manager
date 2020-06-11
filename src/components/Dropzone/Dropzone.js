import React from "react";
import "./Dropzone.css";
import { connect } from "react-redux";
import { toggle_files_dragging } from "../../actions";

const Dropzone = ({ handleUpload, children, toggle_files_dragging }) => {
  let dragCounter = 0;
  const dropzone = React.useRef();

  const handleFiles = (files) => {
    console.log("upload files ....");

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
      toggle_files_dragging(true);
    }

    console.log("detect files ");
  }

  function handleDragLeave(e) {
    preventDefault(e);
    dragCounter--;
    if (dragCounter > 0) return;
    toggle_files_dragging(false);
  }

  function handleDragOver(e) {
    preventDefault(e);
  }

  function handleDrop(e) {
    preventDefault(e);
    toggle_files_dragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
      dragCounter = 0;
    }
  }

  React.useEffect(() => {
    const element = dropzone.current;
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
  }, [dropzone.current]);

  return (
    <div className={"Dropzone"} ref={dropzone}>
      {children}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { toggle_files_dragging })(Dropzone);
