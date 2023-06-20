import { Provider } from "react-redux";
import store from "./redux/Comment/store";
import Comment from "./components/comment/MessageBox";
import Router from "./Router";
// import CommentSection from "./components/comment/CommentBox/CommentSection";
import CommentBox from "./components/comment/CommentBox/CommentBox";
import CommentList from "./components/comment/CommentBox/CommentList";

// import Home from "./components/comment/Home";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App" data-testid={"app-testId"}>
        {/* <Router /> */}
        {/* <Home /> */}
        {/* <Comment /> */}
        {/* <CommentSection/> */}
        <CommentList/>
        <CommentBox />
        
      </div>
    </Provider>
  );
};

export default App;
