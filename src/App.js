import logo from "./logo.svg";
import "./App.css";

// * App 렌더링 구성요소 변경. (결국은 라우터를 사용하게 될거다)
import "./index.css";
import store from "./lib/store";

// * redux Provider 사용
import { Provider } from "react-redux";
import { InboxScreen } from "./components/InboxScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  );
}

export default App;
