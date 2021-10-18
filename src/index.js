import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ConfirmProvider } from "material-ui-confirm";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

// const useStyles = makeStyles((theme) => {
// 	root: {
// 		// some css that access to theme
// 	}
// });
ReactDOM.render(
	<ThemeProvider theme={theme}>
		<ConfirmProvider>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ConfirmProvider>
	</ThemeProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
