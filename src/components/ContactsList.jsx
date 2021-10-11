import React from "react";
import {
	ShowComponent,
	SideBarContainer,
	Input,
	ListContainer,
	FullScreenContainer,
	Text,
} from "./styled";
import { listItems } from "../State";

import Contact from "./Contact";

export default function ContactsList() {
	return (
		<ListContainer>
			{listItems.map((item) => (
				<Contact name={`item ${item}`} />
			))}
		</ListContainer>
	);
}
