import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import DSA from "../pages/DSA";
import WAP from "../pages/WAP";
import Mathematics from "../pages/Mathematics";
import IKS from "../pages/IKS";
import Pandas from "../pages/Pandas";

function AppRoutes() {
  return (
    <Routes>
      {/* Redirect root to home */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      
      {/* Main routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/dsa/*" element={<DSA />} />
      <Route path="/wap/*" element={<WAP />} />
      <Route path="/mathematics/*" element={<Mathematics />} />
      <Route path="/iks/*" element={<IKS />} />
      <Route path="/pandas/*" element={<Pandas />} />
      
      {/* Fallback route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes; 