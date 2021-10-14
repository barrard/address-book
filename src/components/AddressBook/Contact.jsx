import React, { useContext } from "react";
import Context from "./Context";
import sc from "../../styles-config";
import { Text, Padding, StyledListItem } from "./styled";
export default function Contact({ contact }) {
	let { id } = contact;
	let {
		setSelectedContact,
		selectedContact,
		setAddNew,
		edits,
		setEdits,
		setEmailEdits,
		setNewEmail,
	} = useContext(Context);

	const selected = selectedContact.id === id;
	const name = `${contact.fName} ${contact.lName}`;

	return (
		<StyledListItem
			selected={selected}
			onClick={() => {
				if (edits) {
					if (!window.confirm("Unsaved Changes, data will be lost. "))
						return;
				}

				setAddNew(false);
				setEdits(false);
				setEmailEdits(false);
				setNewEmail("");
				setSelectedContact(contact);
			}}
		>
			<Padding h="1em" v="0.5em">
				<Text
					fontWeight={selected ? "700" : "400"}
					color={selected ? sc["black"] : "inherit"}
				>
					{name}
				</Text>
			</Padding>
		</StyledListItem>
	);
}
