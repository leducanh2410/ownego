import React, { useState } from "react";
import sambaWhite from "../assets/img/samba_white.avif";
import sambaBlack from "../assets/img/samba_black.avif";
import sambaOlive from "../assets/img/samba_olive.avif";
import sambaBrown from "../assets/img/samba_brown.avif";
import sambaYellow from "../assets/img/samba_yellow.avif";

interface ShoeOption {
  id: string;
  name: string;
  image: string;
  color: string;
}

interface ShoeSelectorProps {
  onShoeChange: (shoe: ShoeOption) => void;
  selectedShoeId?: string;
}

const ShoeSelector: React.FC<ShoeSelectorProps> = ({ onShoeChange, selectedShoeId = "white" }) => {
  const [selectedId, setSelectedId] = useState(selectedShoeId);

  // Update local state when prop changes
  React.useEffect(() => {
    setSelectedId(selectedShoeId);
  }, [selectedShoeId]);

  const shoeOptions: ShoeOption[] = [
    {
      id: "white",
      name: "White Samba",
      image: sambaWhite,
      color: "white"
    },
    {
      id: "black", 
      name: "Black Samba",
      image: sambaBlack,
      color: "black"
    },
    {
      id: "olive",
      name: "Olive Samba", 
      image: sambaOlive,
      color: "olive"
    },
    {
      id: "brown",
      name: "Brown Samba",
      image: sambaBrown, 
      color: "brown"
    },
    {
      id: "yellow",
      name: "Yellow Samba",
      image: sambaYellow,
      color: "yellow"
    }
  ];

  const handleShoeSelect = (shoe: ShoeOption) => {
    setSelectedId(shoe.id);
    onShoeChange(shoe);
  };

  return (
    <div className="shoe-selector">
      <div className="shoe-options">
        {shoeOptions.map((shoe) => (
          <div
            key={shoe.id}
            className={`shoe-option ${selectedId === shoe.id ? 'active' : ''}`}
            onClick={() => handleShoeSelect(shoe)}
          >
            <img 
              src={shoe.image} 
              alt={shoe.name}
              className="shoe-thumbnail"
            />
            <span className="shoe-name">{shoe.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeSelector; 