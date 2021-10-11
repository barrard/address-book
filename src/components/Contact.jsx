import React, { useContext } from "react";
import Context from "../Context";
import sc from "../styles-config";
import { Text, Padding, StyledListItem } from "./styled";
export default function Contact({ contact }) {
	let { id } = contact;
	let { setSelectedContact, contacts } = useContext(Context);
	const selected = false;
	const name = `${contact.fName} ${contact.lName}`;

	return (
		<StyledListItem
			onClick={() => {
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
