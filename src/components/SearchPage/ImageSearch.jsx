import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { searchImageState, resultImageState } from "../../data/state";
import { useNavigate } from "react-router";
import {
  DragFileSpace,
  FileUploadButton,
  ImageSearchContents,
  SearchDescription,
  SearchTitle,
} from "../../design/SearchPage/SearchPageStyles";
import { FaWineBottle, FaCocktail } from "react-icons/fa";
import Loading from "../../components/Loading";

function ImageSearch() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(null);
  const dragRef = React.useRef(null);
  const [searchImage, setSearchImage] = useRecoilState(searchImageState);
  const [resultImage, setResultImage] = useRecoilState(resultImageState);
  const extensionList = ["jpg", "jpeg", "png", "bmp"];

  const handleUploadedFile = async (e) => {
    let file = "";
    let uploadedImage = new FormData();
    if (e.type === "drop") {
      uploadedImage.append("file", e.dataTransfer.files[0]);
      file = e.dataTransfer.files[0];
    } else {
      uploadedImage.append("file", e.target.files[0]);
      file = e.target.files[0];
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    //이미지 인코딩 for 세션스토리지 저장
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setSearchImage(base64.toString());
      }
    };
    setIsLoading(true);
    const result = await axios
      .post(
        process.env.REACT_APP_DB_HOST + `search/file-upload`,
        uploadedImage,
        config
      )
      .then((res) => res.data)
      .catch(() => null);
    setIsLoading(false);
    setResultImage(result);
    navigate(`/image-search-result`);
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

  if (isLoading) return <Loading />;

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
        <div style={{ margin: "10px" }}>
          <SearchTitle>이미지를 업로드해서 검색</SearchTitle>
          <SearchDescription>갤러리에서 사진을 선택하거나,</SearchDescription>
          <SearchDescription>직접 촬영해서 검색해보세요!</SearchDescription>
          <SearchDescription>
            한 번에 한 장씩, 이미지 파일만 검색 가능합니다 🔍
          </SearchDescription>
        </div>
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
