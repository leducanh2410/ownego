import React, { Fragment } from "react";

import sambaWhite from "../assets/img/samba_white.avif";
import sambaBlack from "../assets/img/samba_black.avif";
import sambaOlive from "../assets/img/samba_olive.avif";
import sambaBrown from "../assets/img/samba_brown.avif";
import sambaYellow from "../assets/img/samba_yellow.avif";

interface ProductImagesProps {
  selectedShoeId?: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ selectedShoeId = "white" }) => {
  const shoeImages = {
    white: sambaWhite,
    black: sambaBlack,
    olive: sambaOlive,
    brown: sambaBrown,
    yellow: sambaYellow
  };

  return (
    <Fragment>
      {Object.entries(shoeImages).map(([id, image]) => (
        <img 
          key={id}
          src={image} 
          alt={`${id} shoe`} 
          className={`shoe ${selectedShoeId === id ? 'show' : ''}`} 
          color={id} 
        />
      ))}
    </Fragment>
  );
};

export default ProductImages;
