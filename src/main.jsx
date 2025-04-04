
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Provider component connects your Redux store to your React app.
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
