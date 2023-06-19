import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/comment/Home";
import Welcome from "./components/comment/Welcome";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/:user" component={<Welcome />} /> */}
        <Route path="/user/:user/*" element={<Welcome />} />
        <Route path="/user/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
