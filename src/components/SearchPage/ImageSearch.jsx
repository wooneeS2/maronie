import React from "react";
import { useRecoilState } from "recoil";
import { imageState } from "../../data/state";
import { useNavigate } from "react-router";
import {
  DragFileSpace,
  FileUploadButton,
  ImageSearchContents,
  SearchDescription,
  SearchTitle,
} from "../../design/SearchPage/SearchPageStyles";
import { FlexRowCenterBox } from "../../design/CommonStyles";
import { FaWineBottle, FaCocktail } from "react-icons/fa";

function ImageSearch() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = React.useState(false);
  const dragRef = React.useRef(null);
  const [uploadedFile, setUploadedFile] = useRecoilState(imageState);
  const extensionList = ["jpg", "jpeg", "png", "bmp"];
  const handleUploadedFile = (e) => {
    let file;
    if (e.type === "drop") {
      setUploadedFile(e.dataTransfer.files[0]);
      file = e.dataTransfer.files[0];
    } else {
      setUploadedFile(e.target.files[0]);
      file = e.target.files[0];
    }

    if (file) {
      sessionStorage.setItem("image", file);
      navigate(`/image-search-result`);
    }
  };

  const handleDragIn = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.items.length) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const fileName = e.dataTransfer.files[0]["name"].split(".");
    const fileExtension = fileName[fileName.length - 1];
    if (extensionList.includes(fileExtension)) {
      handleUploadedFile(e);
    } else {
      alert("지원하지 않는 파일 형식입니다!");
    }
    setIsDragging(false);
  }, []);

  const initDragEvents = React.useCallback(
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

  React.useEffect(() => {
    initDragEvents();
  }, [initDragEvents]);

  return (
    <>
      <DragFileSpace isDragging={isDragging} ref={dragRef}>
        <p
          style={{
            margin: "auto 0",
            fontSize: "2rem",
            lineHeight: 1.5,
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          이미지를 드래그{"&"}드롭으로 <br />
          올릴수 있어요!
        </p>
      </DragFileSpace>
      <ImageSearchContents>
        <div>
          <FaWineBottle size={60} />
          <FaCocktail size={60} />
        </div>
        <SearchTitle>이미지를 업로드해서 검색</SearchTitle>
        <SearchDescription>
          갤러리에서 사진을 선택하거나, 직접 촬영해서 검색해보세요! 한 번에 한
          장씩, 이미지 파일만 검색 가능합니다 🔍
        </SearchDescription>
        <FileUploadButton htmlFor="imageUpload">
          사진 선택하기
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleUploadedFile}
            style={{ display: "none" }}
          />
        </FileUploadButton>
      </ImageSearchContents>
    </>
  );
}
export default ImageSearch;
