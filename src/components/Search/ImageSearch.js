import React, { useState, useCallback, useEffect, useRef } from "react";

function ImageSearch() {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  // 이미지 확인 test 코드
  const [thumbnail, setThumbnail] = useState(null);

  const handleUploadedFile = (e) => {
    let file;
    if (e.type == "drop") {
      setUploadedFile(e.dataTransfer.files[0]);
      file = e.dataTransfer.files[0];
    } else {
      setUploadedFile(e.target.files[0]);
      file = e.target.files[0];
    }
    //이미지 인코딩
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setThumbnail(base64.toString());
      }
    };
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.items.length) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleUploadedFile(e);
    setIsDragging(false);
  };

  const initDragEvents = useCallback(
    () => {
      if (dragRef.current !== null) {
        dragRef.current.addEventListener("dragenter", handleDragIn);
        dragRef.current.addEventListener("dragleave", handleDragOut);
        dragRef.current.addEventListener("dragover", handleDragOver);
        dragRef.current.addEventListener("drop", handleDrop);
      }
    },
    [handleDragIn, handleDragOut, handleDragOver, handleDrop],
    { once: true }
  );

  useEffect(() => {
    initDragEvents();
  }, [initDragEvents]);

  return (
    <div>
      <h1
        style={
          isDragging
            ? { backgroundColor: "pink" }
            : { backgroundColor: "green" }
        }
      >
        이미지를 업로드하세요!
      </h1>
      {uploadedFile ? (
        <img src={thumbnail} style={{ width: "500px", height: "500px" }} />
      ) : (
        <div id="dragFile">
          <label htmlFor="imageUpload" ref={dragRef}>
            드래그
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleUploadedFile}
            />
          </label>
        </div>
      )}
    </div>
  );
}
export default ImageSearch;
