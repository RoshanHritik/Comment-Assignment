import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome from "./components/Home/Welcome";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/:user" component={<Welcome />} /> */}
        <Route path="/sport/:sport/*" element={<Welcome />} />
        <Route path="/sport/*" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
