import React, { useState } from "react";
import Context from "../Context";
import { FullScreenContainer } from "./styled";
import SideBar from "./SideBar";
import Details from "./Details";

const blankContact = { id: 0, fName: "", lName: "", emails: [] };
export default function AddressBook() {
	const [contacts, setContacts] = useState([]);
	const [selectedContact, setSelectedContact] = useState(blankContact);

	const saveContact = () => {
		console.log(selectedContact);
	};

	return (
		<Context.Provider
			value={{
				contacts,
				selectedContact,
				setSelectedContact,
				saveContact,
			}}
		>
			<FullScreenContainer>
				<SideBar />
				<Details />
			</FullScreenContainer>
		</Context.Provider>
	);
}
