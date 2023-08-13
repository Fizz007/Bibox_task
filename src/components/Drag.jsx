import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Drag = () => {
  const [selectedData, setSelectedData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const dragImage = (e, id) => {
    e.dataTransfer.setData("imgId", id);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const dropImage = (e) => {
    e.preventDefault();
    const imgId = parseInt(e.dataTransfer.getData("imgId"));
    const draggedData = selectedData.find((data) => data.id === imgId);
    const dragSpace = document.querySelector(".drag__space");
  
    const existingImages = Array.from(dragSpace.getElementsByTagName("img"));
    const imageAlreadyExists = existingImages.some((img) => img.alt === draggedData.name);
    
    if (!imageAlreadyExists) {
      const newImage = document.createElement("img");
      newImage.src = draggedData.image;
      newImage.alt = draggedData.name;
      newImage.classList.add("dragged-image");
      newImage.style.cssText = `
        width: 180px;
        height: 180px;
        margin-bottom: 20px;
        margin-right: 20px;
        padding: 20px;
      `;
      dragSpace.appendChild(newImage);
    }  
    
  };

  function moveToFinalPage(){
    navigate("/final", { state: { selectedData } });
  }

  useEffect(() => {
    if (location.state?.selectedParts) {
      setSelectedData(location.state.selectedParts);
    }
  }, [location.state]);

  return (
    <div>
      <h1 className="heading">Drop Images on the right side</h1>
      <button className="finish" onClick={moveToFinalPage}>Finish assemble</button>
      <div className="drag">
        <div className="drag__image" style={{ overflow: "scroll" }}>
          {selectedData.map((data) => (
            <div
              key={data.id}
              className="drag__item"
              draggable="true"
              onDragStart={(e) => dragImage(e, data.id)}
            >
              <img src={data.image} alt={data.name} />
            </div>
          ))}
        </div>
        <div className="drag__space" onDrop={dropImage} onDragOver={allowDrop}>
        </div>
      </div>
      
    </div>
  );
};

export default Drag;
