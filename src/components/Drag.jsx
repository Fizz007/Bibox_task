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
      const newImg = document.createElement("img");
      newImg.src = draggedData.image;
      newImg.alt = draggedData.name;
      newImg.classList.add("dragged-image");
      newImg.style.cssText = `
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
        margin-right: 10px;
        padding: 15px;
      `;
      dragSpace.appendChild(newImg);
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
