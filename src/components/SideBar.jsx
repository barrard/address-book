import React from "react";
import { SideBarContainer, Padding } from "./styled";

import ContactsList from "./ContactsList";
import SearchInput from "./SearchInput";
import SideBarHeader from "./SideBarHeader";
export default function SideBar() {
	return (
		<SideBarContainer>
			<Padding p="1em">
				<SideBarHeader />
				<SearchInput />
			</Padding>

			<ContactsList />
		</SideBarContainer>
	);
}
