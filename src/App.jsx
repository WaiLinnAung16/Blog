import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomNavbar from "./components/BottomNavbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-2 py-5">
        <Path />
      </div>
      
      <BottomNavbar />
      
      <ToastContainer />
    </div>
  );
};

export default App;
