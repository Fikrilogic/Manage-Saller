import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LookSeller from "./pages/dashboard/Seller/all-seller-dashboard";
import AddSellerDashboard from "./pages/dashboard/Seller/add-sellers.dashboard";
import EditSellerDashboard from "./pages/dashboard/Seller/edit-sellers";
import EditData from "./pages/dashboard/Seller/edit";
import Dashboard from "./pages/dashboard/main-dashboard";
import Login from "./pages/admin-login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          /
          <Route path="/" element={<Navigate to={"dashboard"} />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="sellers" element={<LookSeller />} />
            <Route path="sellers/add" element={<AddSellerDashboard />} />
            <Route path="sellers/edit" element={<EditSellerDashboard />} />
            <Route path="sellers/edit/:id" element={<EditData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
