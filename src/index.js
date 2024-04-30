import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production', // 개발 환경에서만 DevTools 활성화
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
