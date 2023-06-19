import store from "./redux/store";
import { Provider } from "react-redux";
import Router from "./Router";
// import Home from "./components/comment/Home";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App" data-testid={"app-testId"}>
        <Router />
        {/* <Home /> */}
      </div>
    </Provider>
  );
};

export default App;
