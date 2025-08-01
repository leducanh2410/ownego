import React, { Fragment } from "react";

import blue from "../assets/img/samba_white.avif";
import black from "../assets/img/samba_black.avif";
import green from "../assets/img/samba_olive.avif";
import red from "../assets/img/samba_brown.avif";
import orange from "../assets/img/samba_yellow.avif";

const ProductImages = () => {
  return (
    <Fragment>
      <img src={blue} alt="blue shoe" className="shoe show" color="blue" />
      <img src={red} alt="red shoe" className="shoe" color="red" />
      <img src={green} alt="green shoe" className="shoe" color="green" />
      <img src={orange} alt="orange shoe" className="shoe" color="orange" />
      <img src={black} alt="black shoe" className="shoe " color="black" />
    </Fragment>
  );
};

export default ProductImages;
