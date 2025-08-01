import React, { useEffect } from "react";
import Gradients from "../components/Gradients";
import ProductImages from "../components/ProductImages";
import Info from "../components/Info/Info";

import logo from "../assets/img/logo.png";

const Home = () => {
  let sizes: NodeListOf<Element>;
  let colors: NodeListOf<Element>;
  let shoes: NodeListOf<Element>;
  let gradients: NodeListOf<Element>;
  let shoeBackground: Element | null;
  let shoeHeight: number;
  let prevColor: string = "blue";
  let animateOrNot: boolean = true;

  function changeColor(this: Element): void {
    if (!animateOrNot) {
      console.log("waittttt");
      return;
    }
    const primary: string | null = this.getAttribute("primary");
    const color: string | null = this.getAttribute("color");
    const shoe: Element | null = document.querySelector(`.shoe[color="${color}"]`);
    const gradient: Element | null = document.querySelector(`.gradient[color="${color}"]`);
    const prevGradient: Element | null = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );

    // showing correct color
    colors.forEach((color: Element) => color.classList.remove("active"));
    this.classList.add("active");

    // changing primary css variable
    if (primary) {
      document.documentElement.style.setProperty("--primary", primary);
    }

    // showing correct img
    shoes.forEach((s: Element) => s.classList.remove("show"));
    if (shoe) {
      shoe.classList.add("show");
    }

    // dealing with gradient
    gradients.forEach((g: Element) => g.classList.remove("display", "behind"));
    if (prevGradient) {
      prevGradient.classList.add("behind");
    }
    if (gradient) {
      gradient.classList.add("display");
    }

    // logic
    if (color) {
      prevColor = color;
    }
    animateOrNot = false;

    // hack
    setTimeout(() => {
      animateOrNot = true;
    }, 800);
  }

  function changeSize(this: Element): void {
    sizes.forEach((size: Element) => size.classList.remove("active"));
    this.classList.add("active");
  }

  // for responsive behaviour
  const changeHeight = (): void => {
    const x: MediaQueryList = window.matchMedia("(max-width:1000px)");

    !shoes ? (shoeHeight = 0) : (shoeHeight = (shoes[0] as HTMLElement).offsetHeight);

    if (x.matches) {
      if (shoeHeight === 0) {
        try {
          setTimeout(changeHeight, 50);
        } catch (error) {
          alert("Something is Wrong!!");
        }
      }
      if (shoeBackground) {
        (shoeBackground as HTMLElement).style.height = `${shoeHeight * 0.9}px`;
      }
    } else if (!!shoeBackground) {
      // go back to default
      (shoeBackground as HTMLElement).style.height = "475px";
    }
  };

  useEffect(() => {
    sizes = document.querySelectorAll(".size");
    colors = document.querySelectorAll(".color");
    shoes = document.querySelectorAll(".shoe");
    gradients = document.querySelectorAll(".gradient");
    shoeBackground = document.querySelector(".shoeBackground");

    colors.forEach((color: Element) => color.addEventListener("click", changeColor));
    sizes.forEach((size: Element) => size.addEventListener("click", changeSize));
    changeHeight();
  }, []);
  window.addEventListener("resize", changeHeight);

  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="shoeBackground">
            <Gradients />

            <h1 className="nike">nike</h1>
            <img src={logo} alt="logo" className="logo" />
            <a href="/#" className="share">
              <i className="fas fa-share-alt"></i>
            </a>

            <ProductImages />
          </div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Home;
