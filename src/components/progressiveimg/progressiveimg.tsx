import { useState, useEffect } from "react";
import { LoadedImg, LoadingImg } from "./stylesimg";

export const ProgressiveImg = ({ placeholderSrc, src}:any) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <div>
    {
      placeholderSrc && imgSrc === placeholderSrc ? <LoadingImg {...{ src: imgSrc}}/> : <LoadedImg {...{ src: imgSrc}} />
    }
    </div>
  );
};
