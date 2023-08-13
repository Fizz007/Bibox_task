import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Final = () => {
    const [data, setdata] = useState([])
    const location = useLocation();
    const navv = useNavigate();
 console.log(data)
    useEffect(()=> {
        if (location.state?.selectedData) {
            setdata(location.state.selectedData);
          } 
    },[location.state])
  return (
    <>
    <div>
        <h1 style={{textAlign:'center'}}>Your Bike is built with the following parts</h1>
        <button className='home_page' onClick={()=> navv('/')}>Home</button>
    </div>
      <div className='final_container'>
          {data && data.map((elem,i)=> {
                console.log(elem)
            return <div className='final'>
                <img src={elem.image} alt="" />
            </div>
          })}
      </div>
    </>
  )
}

export default Final
