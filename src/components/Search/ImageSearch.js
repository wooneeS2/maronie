import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef,
} from "react";
function ImageSearch() {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  return (
    <>
      <h1>이미지를 업로드하세요!</h1>
      <input type="file" name="file" id="imageUpload" accept="image/*" />
      <label
        // style={{ backgroundColor: "red", width: "500px", height: "300px" }}
        htmlFor="imageUpload"
        ref={dragRef}
      ></label>
      <div>
        <button></button>
      </div>
    </>
  );
}
export default ImageSearch;
