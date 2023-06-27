import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome from "./components/Home/Welcome";
import { CommentWrapper } from "./components/comment/CommentWrapper";

const ProtectedRoute = ({ element }) => {
  const storedToken = localStorage.getItem("jwtToken");
  try {
    if (!storedToken) {
      throw new Error("User token not found");
    }
    return element;
  } catch (error) {
    console.log(error);
    return <Navigate to="/" replace />;
  }
};

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sport" element={<ProtectedRoute element={<Welcome />} />} />
        <Route path="/sport/:sport/*" element={<ProtectedRoute element={<CommentWrapper />} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
