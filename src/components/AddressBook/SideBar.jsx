import React, { useContext } from "react";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { SideBarContainer, Padding } from "./styled";

import ContactsList from "./ContactsList";
import SearchInput from "./SearchInput";
import SideBarHeader from "./SideBarHeader";
import sc from "../../styles-config";
import Context from "./Context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	topBar: {
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
}));

export default function SideBar() {
	const classes = useStyles();

	const {
		handleDrawerToggle,
		mobileOpen,

		setMobileOpen,
	} = useContext(Context);

	const container =
		window !== undefined
			? () => window.document.getElementById("MainContainer")
			: undefined;

	const sideContent = (
		<>
			<Padding p="1em">
				<Grid className={classes.topBar} container>
					<Grid item>
						<SideBarHeader />
					</Grid>
				</Grid>
				<SearchInput />
			</Padding>
			<ContactsList />
		</>
	);
	return (
		<Box
			component="nav"
			sx={{ width: { sm: sc.drawerWidth }, flexShrink: { sm: 0 } }}
			aria-label="mailbox folders"
		>
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: sc.drawerWidth,
					},
				}}
			>
				{sideContent}
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: sc.drawerWidth,
					},
				}}
				open
			>
				{sideContent}
			</Drawer>
		</Box>
	);
}
