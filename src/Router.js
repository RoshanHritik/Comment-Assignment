import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome from "./components/Home/Welcome";
import CommentList from "./components/comment/CommentBox/CommentList";
import CommentBox from "./components/comment/CommentBox/CommentBox";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/:user" component={<Welcome />} /> */}
        <Route path="/sport/:sport/*" element={<>
          <CommentList/>
        <CommentBox /> 
        </>} />
        <Route path="/sport/*" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
