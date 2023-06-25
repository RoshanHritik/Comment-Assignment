import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome from "./components/Home/Welcome";
import { CommentWrapper } from "./components/comment/CommentWrapper";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sport" element={<Welcome />} />
        <Route path="/sport/:sport/*" element={<CommentWrapper/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
