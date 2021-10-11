import React, { useEffect, useState, useContext } from "react";
import Context from "../Context";
import { FullScreenContainer } from "./styled";
import SideBar from "./SideBar";
import Details from "./Details";
import uuid from "react-uuid";

const blankContact = () => ({ id: uuid(), fName: "", lName: "", emails: [] });
export default function AddressBook() {
	const [contacts, setContacts] = useState({});
	const [selectedContact, setSelectedContact] = useState(blankContact());

	//Details form state
	const [id, setId] = useState(selectedContact.id);
	const [fName, setFName] = useState(selectedContact.fName);
	const [lName, setLName] = useState(selectedContact.lName);
	const [emails, setEmails] = useState(selectedContact.emails);
	const [newEmail, setNewEmail] = useState("");

	useEffect(() => {
		//get form local store
		let contacts = JSON.parse(localStorage.getItem("contacts"));
		setContacts({ ...contacts });
	}, []);

	// sets local state whenever selectedContact updates
	useEffect(() => {
		setFName(selectedContact.fName);
		setLName(selectedContact.lName);
		setEmails(selectedContact.emails);
		setId(selectedContact.id);
	}, [selectedContact]);

	const validateContact = (contact) => {
		if (!fName) return alert("Contact needs a First Name");
		if (!lName) return alert("Contact needs a Last Name");
		return true;
	};

	const deleteContact = (id) => {
		if (
			window.confirm(
				`Are you sure you want to delete ${selectedContact.fName} ${selectedContact.lName} from your contacts?`
			)
		) {
			delete contacts[selectedContact.id];
			setContacts({ ...contacts });
		}
	};

	const saveContact = (contact) => {
		if (!validateContact(contact)) return;
		//validate
		contacts[id] = {
			fName,
			lName,
			emails,
		};

		setContacts({ ...contacts });
		//localstore save
		localStorage.setItem("contacts", JSON.stringify(contacts));
	};

	const createNewContact = () => {
		setSelectedContact(blankContact());
	};

	return (
		<Context.Provider
			value={{
				contacts,
				createNewContact,
				deleteContact,
				emails,
				fName,
				lName,
				newEmail,
				selectedContact,
				saveContact,
				setFName,
				setLName,
				setEmails,
				setNewEmail,
				setSelectedContact,
			}}
		>
			<FullScreenContainer>
				<SideBar />
				<Details />
			</FullScreenContainer>
		</Context.Provider>
	);
}
