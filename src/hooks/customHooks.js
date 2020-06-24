import Axios from "axios";
import * as React from "react";

const uploadFiles = async (fileToUpload) => {
  let data = new FormData();
  data.append("image", fileToUpload);

  const config = {
    onUploadProgress: (progressEvent) => {
      const percentageCompleted = Math.round(
        (progressEvent.loaded / progressEvent.total) * 100
      );
      console.log(`progress: ${percentageCompleted}%`);
    },
  };

  try {
    const response = await Axios.post(
      "https://shrouded-beach-96188.herokuapp.com/upload",
      data,
      config
    );

    return response.data.url;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const handleUpload = (fileList) => {
  const files = [...fileList];
  const MAX_FILE_SIZE = 2e6;
  const MAX_NUMBER_OF_FILES = 1;
  const imageType = /^image\//;

  // must be an image file
  // file size can not exceed 2mb
  // can only upload 1 image files at once

  try {
    if (files.length > MAX_NUMBER_OF_FILES) {
      throw new Error(
        `Exceeding max number of images (${MAX_NUMBER_OF_FILES}) can be uploaded. \n You are trying to upload ${files.length} images `
      );
    }

    files.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        throw new Error(`File size must be within 2Mb. \n - ${file.name}`);
      }

      if (!imageType.test(file.type)) {
        throw new Error(
          `Can only upload image files. \n - ${file.name} has a type of ${file.type}`
        );
      }
    });

    return uploadFiles(files[0]);
  } catch (e) {
    console.log(e);
  }
};

export const useDropzone = (ref, updateTaskUrl) => {
  const [isFilesDragging, setIsFilesDragging] = React.useState(false);
  let dragCounter = 0;
  const handleFiles = (e) => {
    preventDefault(e);
    const files = e.dataTransfer.files;
    handleUpload(files).then((url) => {
      updateTaskUrl(url);
    });
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
      handleFiles(e);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return [isFilesDragging];
};
