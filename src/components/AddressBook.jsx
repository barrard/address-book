import React from "react";

import { FullScreenContainer } from "./styled";
import SideBar from "./SideBar";
import Details from "./Details";

export default function AddressBook() {
	return (
		<FullScreenContainer>
			<SideBar />
			<Details />
		</FullScreenContainer>
	);
}
