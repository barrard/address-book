import React, { useContext } from "react";
import Context from "../Context";
import { RoundButton } from "./styled";

import sc from "../styles-config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddContactsBtn() {
	let { createNewContact } = useContext(Context);

	return (
		<RoundButton
			onClick={createNewContact}
			color={sc["white"]}
			bgColor={sc["primary"]}
		>
			<FontAwesomeIcon icon={faPlus} />
		</RoundButton>
	);
}
