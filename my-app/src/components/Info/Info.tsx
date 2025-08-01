import React, { useState, useEffect } from "react";
import ShoeSelector from "../ShoeSelector";
import FlyingImage from "../FlyingImage";

interface InfoProps {
  onShoeChange: (shoe: any) => void;
  selectedShoeId: string;
  onSizeChange: (size: string) => void;
  selectedSize: string;
  onAddToCart?: () => void;
}

const Info: React.FC<InfoProps> = ({ onShoeChange, selectedShoeId, onSizeChange, selectedSize, onAddToCart }) => {
  const [isFlying, setIsFlying] = useState(false);
  const [flyingImageData, setFlyingImageData] = useState<{
    imageSrc: string;
    startPosition: { x: number; y: number };
    endPosition: { x: number; y: number };
  } | null>(null);
  
  // Xóa addToCartRef, productImageRef không cần thiết

  const shoeNames = {
    white: "White Samba",
    black: "Black Samba", 
    olive: "Olive Samba",
    brown: "Brown Samba",
    yellow: "Yellow Samba"
  };

  const [selectedShoe, setSelectedShoe] = useState({
    id: selectedShoeId,
    name: shoeNames[selectedShoeId as keyof typeof shoeNames] || "White Samba",
    image: "",
    color: selectedShoeId
  });

  const handleShoeChange = (shoe: any) => {
    setSelectedShoe(shoe);
    onShoeChange(shoe);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isFlying) return; // Prevent multiple animations
    
    // Lấy nút cart-button ở góc phải
    const cartButton = document.querySelector('.cart-button') as HTMLElement;
    const productImage = document.querySelector(`.shoe.show`) as HTMLImageElement;
    
    if (cartButton && productImage) {
      const buttonRect = cartButton.getBoundingClientRect();
      const imageRect = productImage.getBoundingClientRect();
      
      setFlyingImageData({
        imageSrc: productImage.src,
        startPosition: {
          x: imageRect.left + imageRect.width / 2 - 40,
          y: imageRect.top + imageRect.height / 2 - 40
        },
        endPosition: {
          x: buttonRect.left + buttonRect.width / 2 - 40,
          y: buttonRect.top + buttonRect.height / 2 - 40
        }
      });
      
      setIsFlying(true);
    }
  };

  const handleAnimationComplete = () => {
    setIsFlying(false);
    setFlyingImageData(null);
    if (onAddToCart) {
      onAddToCart();
    }
  };

  useEffect(() => {
    setSelectedShoe({
      id: selectedShoeId,
      name: shoeNames[selectedShoeId as keyof typeof shoeNames] || "White Samba",
      image: "",
      color: selectedShoeId
    });
  }, [selectedShoeId]);

  const shoeName = (
    <div className="shoeName">
      <div>
        <h1 className="big">Adidas Samba</h1>
        <span className="new">new</span>
      </div>
      <h3 className="small">{selectedShoe.name}</h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Product Info</h3>
      <p className="text">
        Classic Adidas Samba sneakers with premium materials and timeless design.
        Perfect for both casual wear and street style.
      </p>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className="sizes">
        {["7", "8", "9", "10", "11"].map((size) => (
          <span
            key={size}
            className={`size ${selectedSize === size ? 'active' : ''}`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <a 
        href="/#" 
        className="buy" 
        onClick={handleAddToCart}
      >
        <i className="pi pi-shopping-cart"></i>   Add to cart
      </a>
      <div className="price">
        <i className="pi pi-dollar"></i>
        <h1>149.99</h1>
      </div>
    </div>
  );

  return (
    <div className="info">
      {shoeName}
      {description}
      <ShoeSelector onShoeChange={handleShoeChange} selectedShoeId={selectedShoe.id} />
      {SizeContainer}
      {BuySection}
      
      {flyingImageData && (
        <FlyingImage
          imageSrc={flyingImageData.imageSrc}
          startPosition={flyingImageData.startPosition}
          endPosition={flyingImageData.endPosition}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
    </div>
  );
};

export default Info;
