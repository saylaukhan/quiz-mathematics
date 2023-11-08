import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EasyTaskPage from './page/EasyTaskPage';
import MiddleTaskPage from './page/MiddleTaskPage';
import HardTaskPage from './page/HardTaskPage';
import MainPage from './page/MainPage';

const MainMenu = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/easy" element={<EasyTaskPage />} />
        <Route path="/middle" element={<MiddleTaskPage />} />
        <Route path="/hard" element={<HardTaskPage />} />
      </Routes>
    </div>
  );
};

export default MainMenu;
