import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bike from './components/Bike';
import Parts from "./components/Parts";
import Drag from "./components/Drag";
import Final from "./components/Final";

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Bike/>}/>
    <Route path='/parts' element={<Parts/>}/>
    <Route path='/drag' element={<Drag/>}/>
    <Route path='/final' element={<Final/>}/>
    </Routes>
     
    </>
  );
}

export default App;
