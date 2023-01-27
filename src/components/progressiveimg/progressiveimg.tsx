import { useState, useEffect } from "react";

export const ProgressiveImg = ({ placeholderSrc, src}:any) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  return (
    <img
      {...{ src: imgSrc}}
      
      className={`${customClass}`}
    />
  );
};
