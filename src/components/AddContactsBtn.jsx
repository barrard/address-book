import React from "react";
import {
	Flex,
	ShowComponent,
	SideBarContainer,
	Input,
	ListContainer,
	RoundButton,
	Title,
} from "./styled";

import sc from "../styles-config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function AddContactsBtn() {
	return (
		<RoundButton color={sc["white"]} bgColor={sc["primary"]}>
			<FontAwesomeIcon icon={faPlus} />
		</RoundButton>
	);
}
