import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import BottomPlayer from './components/BottomPlayer';


export default function App() {
  return (
    <BrowserRouter>
      <SideBar />
     <Routes>
        <Route path="/" element={<HomePage />} />
  
      </Routes>
      <BottomPlayer />
    </BrowserRouter >
  );
}
