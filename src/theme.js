import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#7797C8",
		},
		secondary: {
			main: "#edf2ff",
		},
	},
	typography: {
		fontFamily: "Nunito Sans",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "18px",
		lineHeight: "25px",
	},
});

export default theme;
