import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import DuplicateApp from "./DuplicateApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<DuplicateApp />
	</React.StrictMode>
);
