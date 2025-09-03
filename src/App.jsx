import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LayOut from "./components/layout/LayOut";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LayOut />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
