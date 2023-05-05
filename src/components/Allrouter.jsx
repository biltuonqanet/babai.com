import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import Otp from "./admin/Otp";
import Admindashboard from "./admin/dashboard/Admindashboard";

function Allrouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/otp" element={<Otp />} />
      
      <Route path="/admin/dashboard" element={<Admindashboard />} />
    </Routes>
  );
}

export default Allrouter;
