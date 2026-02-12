import { useState, useEffect } from "react";
import { Routes, Route,Navigate  } from "react-router-dom";


import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Policies from "./pages/Policies";
import SOPs from "./pages/SOPs";
import Products from "./pages/Products";
import Trainings from "./pages/Trainings";
import Promotions from "./pages/Promotions";
import ContactInfo from "./pages/ContactInfo";
import Complaint from "./pages/Complaint";
import Circulars from "./pages/Circulars";

export default function App() {

  const [user, setUser] = useState(null);
 
  // 🔥 RESTORE USER AFTER REFRESHd
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <>
      {/* GLOBAL NAVBAR */}
      <Navbar user={user} setUser={setUser}/>

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home user={user} />} />
        <Route
  path="/login"
  element={
    user
      ? <Navigate to="/dashboard" />
      : <Login setUser={setUser} />
  }
/>
        {/* 🔐 PROTECTED ROUTES */}
        <Route
          element={
            <ProtectedRoute>
              <Layout user={user} />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/reports" element={<Reports user={user} />} />
          <Route path="/policies" element={<Policies user={user} />} />
          <Route path="/sops" element={<SOPs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/circulars" element={<Circulars />} />
        </Route>

      </Routes>
    </>
  );
}
