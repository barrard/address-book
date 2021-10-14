import React, { useContext, useState, useEffect } from "react";
import { DetailsContainer } from "./styled";
import Context from "./Context";

import SaveDetails from "./SaveDetails";
import ContactDetails from "./ContactDetails";
import ContactContext from "./ContactContext";

export default function Details() {
	const {
		setSelectedContact,
		selectedContact,
		saveContact,
		edits,
		setEdits,
		deleteContact,
	} = useContext(Context);

	const [unsavedEdits, setUnsavedEdits] = useState(false);

	//Details form state
	const [id, setId] = useState(selectedContact.id);
	const [fName, setFName] = useState(selectedContact.fName);
	const [lName, setLName] = useState(selectedContact.lName);
	const [emails, setEmails] = useState(selectedContact.emails);
	const [newEmail, setNewEmail] = useState("");
	const [emailEdits, setEmailEdits] = useState(false);

	useEffect(() => {
		setUnsavedEdits(edits);
	}, [edits]);

	useEffect(() => {
		setEdits(unsavedEdits);
	}, [unsavedEdits]);

	// sets local state whenever selectedContact updates
	useEffect(() => {
		setFName(selectedContact.fName);
		setLName(selectedContact.lName);
		setEmails([...selectedContact.emails]);
		setId(selectedContact.id);
	}, [selectedContact]);

	const validateContact = (contact) => {
		let { fName, lName } = contact;
		if (!fName) return alert("Contact needs a First Name");
		if (!lName) return alert("Contact needs a Last Name");
		return true;
	};

	const addNewContact = () => {
		const contact = {
			id,
			fName: fName.trim(),
			lName: lName.trim(),
			emails,
		};

		if (validateContact(contact)) {
			setUnsavedEdits(false);
			saveContact(contact);
		}
	};

	return (
		<ContactContext.Provider
			value={{
				addNewContact,
				fName,
				lName,
				deleteContact,
				selectedContact,
				unsavedEdits,
				setUnsavedEdits,
				emailEdits,
				emails,
				newEmail,
				setEmailEdits,
				setSelectedContact,
				setEmails,
				setFName,
				setLName,
				setNewEmail,
			}}
		>
			<DetailsContainer>
				{/* contact details  */}
				<ContactDetails />

				{/* Contact edit buttons */}
				<SaveDetails />
			</DetailsContainer>
		</ContactContext.Provider>
	);
}
