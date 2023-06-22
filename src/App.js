import { Provider } from "react-redux";
import store from "./redux/Comment/store";
import Router from "./Router";
import CommentBox from "./components/comment/CommentBox/CommentBox";
import CommentList from "./components/comment/CommentBox/CommentList";
import { CommentWrapper } from "./components/comment/CommentWrapper";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App" data-testid={"app-testId"}>
        {/* <Router /> */}
        {/* <Home /> */}
        {/* <CommentList/>
        <CommentBox />         */}
        <div style={{backgroundColor: "#e6e6e6", height: "100vh"}}>
        <CommentWrapper/>
        </div>
      </div>
    </Provider>
  );
};

export default App;
