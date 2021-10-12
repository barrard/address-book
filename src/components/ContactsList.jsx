import React, { useContext } from "react";
import Context from "../Context";
import { ListContainer, Text } from "./styled";

import Contact from "./Contact";

export default function ContactsList() {
	let { filterContacts } = useContext(Context);

	return (
		<ListContainer>
			{Object.keys(filterContacts).length === 0 && (
				<Text>No Contacts</Text>
			)}
			{Object.keys(filterContacts).length > 0 &&
				Object.keys(filterContacts).map((id) => (
					<Contact contact={filterContacts[id]} key={id} />
				))}
		</ListContainer>
	);
}
