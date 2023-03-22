import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "routes";
import { store } from "redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Routes />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
