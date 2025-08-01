import  { useState } from "react";
import Gradients from "../components/Gradients";
import ProductImages from "../components/ProductImages";
import Info from "../components/Info/Info";

import logo from "../assets/img/logo.png";

const Home = () => {
  const [selectedShoeId, setSelectedShoeId] = useState("white");
  const [selectedSize, setSelectedSize] = useState("9");
  const [cartBounce, setCartBounce] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleShoeChange = (shoe: any) => {
    setSelectedShoeId(shoe.id);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleCartClick = () => {
    // Add cart functionality here
    console.log("Cart clicked");
  };

  const handleAddToCart = () => {
    // Add to cart functionality here
    console.log("Product added to cart:", selectedShoeId, selectedSize);
    
    // Tăng số lượng giỏ hàng
    setCartCount(prev => prev + 1);
    
    // Trigger cart bounce animation
    setCartBounce(true);
    setTimeout(() => setCartBounce(false), 600);
  };

  return (
    <div className="Home">
      <button className={`cart-button ${cartBounce ? 'cart-bounce' : ''}`} onClick={handleCartClick}>
        <i className="pi pi-shopping-cart"></i>
        {cartCount > 0 && (
          <span className="cart-count">{cartCount}</span>
        )}
      </button>
      <div className="container">
        <div className="card">
          <div className="shoeBackground">
            <Gradients />

            <h1 className="nike">adidas</h1>
            <img src={logo} alt="logo" className="logo" />
            {/* <a href="/#" className="share">
              <i className="fas fa-share-alt"></i>
            </a> */}

            <ProductImages selectedShoeId={selectedShoeId} />
          </div>
          <Info 
            onShoeChange={handleShoeChange} 
            selectedShoeId={selectedShoeId}
            onSizeChange={handleSizeChange}
            selectedSize={selectedSize}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
