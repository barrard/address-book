import React, { useContext } from "react";
import Context from "../Context";
import { ListContainer, Text } from "./styled";

import Contact from "./Contact";

export default function ContactsList() {
	let { contacts } = useContext(Context);

	console.log(contacts);
	return (
		<ListContainer>
			{Object.keys(contacts).length === 0 && <Text>No Contacts</Text>}
			{Object.keys(contacts).length > 0 &&
				Object.keys(contacts).map((id) => (
					<Contact contact={contacts[id]} key={id} />
				))}
		</ListContainer>
	);
}
