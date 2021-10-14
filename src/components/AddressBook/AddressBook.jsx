import React, { useEffect, useState } from "react";
import Context from "./Context";
import { FullScreenContainer } from "./styled";
import SideBar from "./SideBar";
import Details from "./Details";
import uuid from "react-uuid";

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

	return (
		<Context.Provider
			value={{
				addNew,
				contacts,
				createNewContact,
				deleteContact,
				filterContacts,
				selectedContact,
				saveContact,
				search,
				setAddNew,
				setSearch,
				setSelectedContact,
				edits,
				setEdits,
			}}
		>
			<FullScreenContainer>
				<SideBar />
				<Details />
			</FullScreenContainer>
		</Context.Provider>
	);
}
