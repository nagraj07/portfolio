import React, { useState } from "react";
import Header from "./Components/Header";
import Frontpage from "./Components/Frontpage";
import Sidemenu from "./Components/Sidemenu";
import About from "./Components/About";
import Myskills from "./Components/Myskills";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";



function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ backgroundImage: "URL('./Images/background.jpeg')", backgroundSize: "cover" }}>
        <Header />
        <div style={{ display: "flex", paddingBottom: "30px" }}>
          <Frontpage />
          <Sidemenu />
        </div>
      </div>
      <About />
      <Myskills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
