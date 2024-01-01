import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-2 py-5">
        <Path />
      </div>
    </div>
  );
};

export default App;
