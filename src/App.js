import { Provider } from "react-redux";
import store from "./redux/Comment/store";
import Router from "./Router";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App" data-testid={"app-testId"}>
        <div style={{ backgroundColor: "#e6e6e6", height: "100vh" }}>
          <Router />
        </div>
      </div>
    </Provider>
  );
};

export default App;
