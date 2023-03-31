import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrum from "./components/Breadcrum";
import AddEdit from "./pages/AddEdit";
import Homepage from "./pages/Homepage";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Breadcrum />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/edit/:id" element={<AddEdit />} />
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;