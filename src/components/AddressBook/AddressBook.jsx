import React, { useEffect, useState } from "react";
import Context from "./Context";
import { FullScreenContainer } from "./styled";
import SideBar from "./SideBar";
import Details from "./Details";
import uuid from "react-uuid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import sc from "../../styles-config";
import SideBarHeader from "./SideBarHeader";

const blankContact = () => ({
	id: uuid(),
	fName: "",
	lName: "",
	emails: [],
	saved: false,
});
export default function AddressBook() {
	const [addNew, setAddNew] = useState(false);
	const [edits, setEdits] = useState(false);

	const [contacts, setContacts] = useState({});
	const [filterContacts, setFilterContacts] = useState({});

	const [selectedContact, setSelectedContact] = useState(blankContact());

	const [search, setSearch] = useState("");
	const [mobileOpen, setMobileOpen] = React.useState(false);

	useEffect(() => {
		//get from local store
		let contacts = JSON.parse(localStorage.getItem("contacts"));
		setContacts({ ...contacts });
		setFilterContacts({ ...contacts });
	}, []);

	//Search events
	useEffect(() => {
		let foundContacts = {};

		Object.entries(contacts).forEach(([id, contact]) => {
			let { fName, lName, emails } = contact;
			//find names that start with search
			if (fName.toLowerCase().includes(search.toLowerCase())) {
				foundContacts[id] = contact;
			}
			if (lName.toLowerCase().includes(search.toLowerCase())) {
				foundContacts[id] = contact;
			}

			//find emails that include
			emails.forEach((email) => {
				if (email.toLowerCase().includes(search.toLowerCase())) {
					foundContacts[id] = contact;
				}
			});
		});
		setFilterContacts(foundContacts);
	}, [search, contacts]);

	const deleteContact = (id) => {
		if (
			window.confirm(
				`Are you sure you want to delete ${selectedContact.fName} ${selectedContact.lName} from your contacts?`
			)
		) {
			delete contacts[selectedContact.id];
			setContacts({ ...contacts });
			setSelectedContact(blankContact());
		}
	};

	const saveContact = (contact) => {
		let { id, fName, lName } = contact;
		//validate
		contacts[id] = {
			...contact,
			saved: true,
		};

		setSelectedContact({ ...contacts[id] });
		setContacts({ ...contacts });
		setAddNew(false);
		localStorage.setItem("contacts", JSON.stringify(contacts));
		// alert(`Saved contact ${fName} ${lName}`);
	};

	const createNewContact = () => {
		setSelectedContact(blankContact());
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const TopHeader = () => {
		return (
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: sc["light-1"],
					width: { sm: `calc(100% - ${sc.drawerWidth}px)` },
					ml: { sm: `${sc.drawerWidth}px` },
					display: { sm: "none" },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<div
						style={{
							display: "inline-flex",
							width: "100%",
							justifyContent: "center",
						}}
					>
						<SideBarHeader />
					</div>
				</Toolbar>
			</AppBar>
		);
	};

	return (
		<Context.Provider
			value={{
				addNew,
				contacts,
				createNewContact,
				deleteContact,
				filterContacts,
				handleDrawerToggle,
				mobileOpen,
				selectedContact,
				saveContact,
				search,
				setAddNew,
				setSearch,
				setSelectedContact,
				edits,
				setEdits,
				setMobileOpen,
			}}
		>
			<FullScreenContainer id="MainContainer">
				<TopHeader />
				<SideBar />
				<Details />
			</FullScreenContainer>
		</Context.Provider>
	);
}
