import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import parts from "../data";

const Parts = () => {
  const navigate = useNavigate();
  const [selectedParts, setSelectedParts] = useState([]);

  function handleSelect(e, id) {
    const selected = e.target.checked;
    setSelectedParts((prevState) => {
      if (selected) {
        const selectedPart = parts.find((part) => part.id === id);
        return [...prevState, selectedPart];
      }
    });
  }

  function handleClick() {
    console.log(selectedParts);
    navigate("/drag", { state: { selectedParts } });
  }

  return (
    <>
      <div className="parts-container">
        <div>
        <div className="btn">
                  <button onClick={handleClick}>Go to assembly page</button>
                </div>
          {parts &&
            parts.map((part) => (
              
                <div key={part.id} className="product">
                  <img src={part.image} alt={part.name} />
                  <div className="products">
                    <input
                      type="checkbox"
                      checked={selectedParts.some(
                        (selectedPart) => selectedPart.id === part.id
                      )}
                      onChange={(e) => handleSelect(e, part.id)}
                    />
                    <h3>{part.name}</h3>
                  </div>
                </div>
              
            ))}
                
        </div>
      </div>
    </>
  );
};

export default Parts;
