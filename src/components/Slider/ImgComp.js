import React from "react";

function ImgComp({src}){
  let imgStyles = {
    width: 100+"%",
    height: "auto",
    objectFit: "cover"
  }
  return <img src={src} alt="slide-img" style={imgStyles} />
}

export default ImgComp;