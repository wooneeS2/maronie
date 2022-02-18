import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  DragFileSpace,
  FileUploadBtn,
  SearchTitle,
} from "../../design/SearchPage/SearchPageStyles";
function ImageSearch() {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  // 이미지 확인 test 코드
  const [thumbnail, setThumbnail] = useState(null);

  const handleUploadedFile = (e) => {
    let file;
    if (e.type === "drop") {
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
      <SearchTitle>이미지를 업로드해서 검색할 수 있어요!</SearchTitle>
      {uploadedFile ? (
        <img
          src={thumbnail}
          style={{ width: "100%", height: "100%" }}
          alt="이미지 업로드 테스트용 미리보기"
        />
      ) : (
        <DragFileSpace isDragging={isDragging} ref={dragRef}>
          <p>드래그해서 파일을 업로드 해보세요</p>
          <FileUploadBtn htmlFor="imageUpload">
            파일 선택하기
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleUploadedFile}
              style={{ display: "none" }}
            />
          </FileUploadBtn>
        </DragFileSpace>
      )}
    </div>
  );
}
export default ImageSearch;
