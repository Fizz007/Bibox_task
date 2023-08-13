import React from 'react'
import { useNavigate } from 'react-router-dom';

const Bike = () => {
    const navigate = useNavigate();
    return (
      <div className="bike">
        <h2>Bike</h2>
        <img
          src="https://www.muthootcap.com/wp-content/uploads/2022/11/KTM-RC-200.jpg"
          alt="bike"
        />
        <button onClick={() => navigate("/parts")}>Proceed</button>
      </div>
    );
}

export default Bike
