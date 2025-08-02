import React, { useState } from 'react';
import './SizeGuidePopup.scss';
import howToMeasureImage from '../assets/img/howToMeasure.png';

interface SizeGuidePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuidePopup: React.FC<SizeGuidePopupProps> = ({ isOpen, onClose }) => {
  const [selectedUnit, setSelectedUnit] = useState<'cm' | 'inches'>('cm');

  if (!isOpen) return null;

  const cmData = [
    { footLength: '22.1 cm', eu: '36', uk: '3.5', usMen: '4', usWomen: '5' },
    { footLength: '22.5 cm', eu: '36 2/3', uk: '4', usMen: '4.5', usWomen: '5.5' },
    { footLength: '22.9 cm', eu: '37 1/3', uk: '4.5', usMen: '5', usWomen: '6' },
    { footLength: '23.3 cm', eu: '38', uk: '5', usMen: '5.5', usWomen: '6.5' },
    { footLength: '23.8 cm', eu: '38 2/3', uk: '5.5', usMen: '6', usWomen: '7' },
    { footLength: '24.2 cm', eu: '39 1/3', uk: '6', usMen: '6.5', usWomen: '7.5' },
    { footLength: '24.6 cm', eu: '40', uk: '6.5', usMen: '7', usWomen: '8' },
    { footLength: '25.1 cm', eu: '40 2/3', uk: '7', usMen: '7.5', usWomen: '8.5' },
    { footLength: '25.5 cm', eu: '41 1/3', uk: '7.5', usMen: '8', usWomen: '9' },
    { footLength: '25.9 cm', eu: '42', uk: '8', usMen: '8.5', usWomen: '9.5' },
    { footLength: '26.3 cm', eu: '42 2/3', uk: '8.5', usMen: '9', usWomen: '10' },
    { footLength: '26.8 cm', eu: '43 1/3', uk: '9', usMen: '9.5', usWomen: '10.5' },
    { footLength: '27.2 cm', eu: '44', uk: '9.5', usMen: '10', usWomen: '11' },
    { footLength: '27.6 cm', eu: '44 2/3', uk: '10', usMen: '10.5', usWomen: '11.5' },
    { footLength: '28.1 cm', eu: '45 1/3', uk: '10.5', usMen: '11', usWomen: '12' },
    { footLength: '28.5 cm', eu: '46', uk: '11', usMen: '11.5', usWomen: '12.5' },
    { footLength: '28.9 cm', eu: '46 2/3', uk: '11.5', usMen: '12', usWomen: '13' },
    { footLength: '29.4 cm', eu: '47 1/3', uk: '12', usMen: '12.5', usWomen: '13.5' },
    { footLength: '29.8 cm', eu: '48', uk: '12.5', usMen: '13', usWomen: '14' },
    { footLength: '30.1 cm', eu: '48 2/3', uk: '13', usMen: '13.5', usWomen: '14.5' },
    { footLength: '30.5 cm', eu: '49 1/3', uk: '13.5', usMen: '14', usWomen: '15' },
    { footLength: '31.0 cm', eu: '50', uk: '14', usMen: '14.5', usWomen: '15.5' },
    { footLength: '31.4 cm', eu: '50 2/3', uk: '14.5', usMen: '15', usWomen: '--' },
    { footLength: '31.8 cm', eu: '51 1/3', uk: '15', usMen: '16', usWomen: '--' },
    { footLength: '32.6 cm', eu: '52 2/3', uk: '16', usMen: '17', usWomen: '--' },
  ];

  const inchesData = [
    { footLength: '8.7"', eu: '36', uk: '3.5', usMen: '4', usWomen: '5' },
    { footLength: '8.9"', eu: '36 2/3', uk: '4', usMen: '4.5', usWomen: '5.5' },
    { footLength: '9.0"', eu: '37 1/3', uk: '4.5', usMen: '5', usWomen: '6' },
    { footLength: '9.2"', eu: '38', uk: '5', usMen: '5.5', usWomen: '6.5' },
    { footLength: '9.4"', eu: '38 2/3', uk: '5.5', usMen: '6', usWomen: '7' },
    { footLength: '9.5"', eu: '39 1/3', uk: '6', usMen: '6.5', usWomen: '7.5' },
    { footLength: '9.7"', eu: '40', uk: '6.5', usMen: '7', usWomen: '8' },
    { footLength: '9.9"', eu: '40 2/3', uk: '7', usMen: '7.5', usWomen: '8.5' },
    { footLength: '10.0"', eu: '41 1/3', uk: '7.5', usMen: '8', usWomen: '9' },
    { footLength: '10.2"', eu: '42', uk: '8', usMen: '8.5', usWomen: '9.5' },
    { footLength: '10.4"', eu: '42 2/3', uk: '8.5', usMen: '9', usWomen: '10' },
    { footLength: '10.6"', eu: '43 1/3', uk: '9', usMen: '9.5', usWomen: '10.5' },
    { footLength: '10.7"', eu: '44', uk: '9.5', usMen: '10', usWomen: '11' },
    { footLength: '10.9"', eu: '44 2/3', uk: '10', usMen: '10.5', usWomen: '11.5' },
    { footLength: '11.1"', eu: '45 1/3', uk: '10.5', usMen: '11', usWomen: '12' },
    { footLength: '11.2"', eu: '46', uk: '11', usMen: '11.5', usWomen: '12.5' },
    { footLength: '11.4"', eu: '46 2/3', uk: '11.5', usMen: '12', usWomen: '13' },
    { footLength: '11.6"', eu: '47 1/3', uk: '12', usMen: '12.5', usWomen: '13.5' },
    { footLength: '11.7"', eu: '48', uk: '12.5', usMen: '13', usWomen: '14' },
    { footLength: '11.9"', eu: '48 2/3', uk: '13', usMen: '13.5', usWomen: '14.5' },
    { footLength: '12.0"', eu: '49 1/3', uk: '13.5', usMen: '14', usWomen: '15' },
    { footLength: '12.2"', eu: '50', uk: '14', usMen: '14.5', usWomen: '15.5' },
    { footLength: '12.4"', eu: '50 2/3', uk: '14.5', usMen: '15', usWomen: '--' },
    { footLength: '12.5"', eu: '51 1/3', uk: '15', usMen: '16', usWomen: '--' },
    { footLength: '12.8"', eu: '52 2/3', uk: '16', usMen: '17', usWomen: '--' },
  ];

  const data = selectedUnit === 'cm' ? cmData : inchesData;

  return (
    <div className="size-guide-overlay" onClick={onClose}>
      <div className="size-guide-popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h1 className="popup-subtitle">FOOTWEAR SIZING</h1>
          <button className="close-button" onClick={onClose}>
            <i className="pi pi-times"></i>
          </button>
        </div>

        <div className="measurement-guide">
          <h3 className="guide-title">CÁCH ĐO</h3>
          <p className="guide-description">
            Làm theo những bước sau để chọn đúng kích cỡ. Để tìm số đo chuẩn nhất, hãy đo bàn chân bạn vào cuối ngày.
          </p>
          <div className="measurement-content">
            <div className="measurement-image">
              <img src={howToMeasureImage} alt="How to measure foot" />
            </div>
            <div className="measurement-instruction">
              <div className="instruction-step">
                <span className="step-number"></span>
                <span className="step-text">Chiều dài: Đo khoảng cách từ đầu ngón chân dài nhất đến điểm cuối gót chân.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="unit-tabs">
          <button 
            className={`unit-tab ${selectedUnit === 'inches' ? 'active' : ''}`}
            onClick={() => setSelectedUnit('inches')}
          >
            Inches
          </button>
          <button 
            className={`unit-tab ${selectedUnit === 'cm' ? 'active' : ''}`}
            onClick={() => setSelectedUnit('cm')}
          >
            cm
          </button>
        </div>

        <div className="size-table-container">
          <div className="size-table">
            <table>
              <thead>
                <tr>
                  <th className="fixed-column">Heel-toe</th>
                  {data.map((row, index) => (
                    <th key={index}>{row.footLength}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fixed-column">EU</td>
                  {data.map((row, index) => (
                    <td key={index}>{row.eu}</td>
                  ))}
                </tr>
                <tr>
                  <td className="fixed-column">UK</td>
                  {data.map((row, index) => (
                    <td key={index}>{row.uk}</td>
                  ))}
                </tr>
                <tr>
                  <td className="fixed-column">US - Men</td>
                  {data.map((row, index) => (
                    <td key={index}>{row.usMen}</td>
                  ))}
                </tr>
                <tr>
                  <td className="fixed-column">US - Women</td>
                  {data.map((row, index) => (
                    <td key={index}>{row.usWomen}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="scroll-hint">
            <i className="pi pi-chevron-left"></i>
            <span>Scroll horizontally to see details</span>
            <i className="pi pi-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuidePopup; 