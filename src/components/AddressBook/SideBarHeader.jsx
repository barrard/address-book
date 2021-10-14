import React from "react";
import { Flex, Padding, Title } from "./styled";
import AddContactsBtn from "./AddContactsBtn";

export default function SideBarHeader() {
	return (
		<Flex justify="space-between" align="center">
			<Padding r="1em">
				<Title>Contacts</Title>
			</Padding>
			<AddContactsBtn />
		</Flex>
	);
}
