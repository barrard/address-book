const styles = {
	//font
	"font-family": "Nunito Sans",
	"font-style": "normal",
	"font-weight": "normal",
	"font-size": "18px",
	"line-height": "25px",
	"title-font-size": "36px",
	"title-line-height": "49px",

	//border
	"border-radius": "4px",

	//colors
	black: "#000",
	primary: "#7797C8",
	white: "#FFF",
	red: "#E24818",

	//light colors
	"light-1": "#F8F8F8",
	"light-2": "#E5E5E5",
	"light-3": "#E8E8E8",

	//dark colors
	"dark-1": "#444444",
	"dark-2": "#555",
	"dark-3": "#999",

	//Gradient
	"light-gradient": function () {
		return `linear-gradient(90.27deg, ${styles["light-3"]} 12.78%, ${styles["light-1"]} 90.73%);`;
	},

	sideWidth: "225px",
	drawerWidth: 240,
};

export default styles;
