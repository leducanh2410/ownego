import React, { useEffect, useRef } from 'react';

interface FlyingImageProps {
  imageSrc: string;
  startPosition: { x: number; y: number };
  endPosition: { x: number; y: number };
  onAnimationComplete: () => void;
}

const FlyingImage: React.FC<FlyingImageProps> = ({
  imageSrc,
  startPosition,
  endPosition,
  onAnimationComplete
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    // Set initial position
    image.style.left = `${startPosition.x}px`;
    image.style.top = `${startPosition.y}px`;

    // Trigger animation
    requestAnimationFrame(() => {
      image.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      image.style.left = `${endPosition.x}px`;
      image.style.top = `${endPosition.y}px`;
      image.style.transform = 'scale(0.3) rotate(360deg)';
      image.style.opacity = '0.7';
    });

    // Clean up after animation
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 800);

    return () => clearTimeout(timer);
  }, [startPosition, endPosition, onAnimationComplete]);

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt="flying product"
      className="flying-image"
      style={{
        position: 'fixed',
        width: '80px',
        height: '80px',
        objectFit: 'cover',
        zIndex: 9999,
        pointerEvents: 'none',
        borderRadius: '50%',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}
    />
  );
};

export default FlyingImage; 