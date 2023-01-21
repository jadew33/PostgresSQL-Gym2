import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./Components copy/Authentication/Auth";
import ClientNav from "./Components copy/Nav/ClientNav";
import ClientProfile from "./Components copy/Profile/ClientProfile";
import ClientSchedule from "./Components copy/Schedule/ClientSchedule";
import AdminSchedule from "./Components copy/Schedule/AdminSchedule";
import AdminProfile from "./Components copy/Profile/AdminProfile";
import AdminUsers from "./Components copy/Users.js/Users";
import "./Styles/App.scss";
import AllUsers from "./Components copy/Users.js/AllUsers";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ClientNav />
        <Routes>
          <Route path="/admin/schedule" element={<AdminSchedule />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/users" element={<AllUsers />} />
          <Route path="/admin/addUser" element={<AdminUsers />} />
          <Route path="/client/schedule" element={<ClientSchedule />} />
          <Route path="/client/profile" element={<ClientProfile />} />
          <Route path="*" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}
