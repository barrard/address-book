import React, { useContext } from "react";
import Context from "../Context";
import { RoundButton } from "./styled";

import sc from "../styles-config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddContactsBtn() {
	let { createNewContact, addNew, setAddNew } = useContext(Context);

	return (
		<RoundButton
			addNew={addNew}
			onClick={() => {
				setAddNew(true);
				createNewContact();
			}}
			color={sc["white"]}
			bgColor={sc["primary"]}
		>
			<FontAwesomeIcon icon={faPlus} />
		</RoundButton>
	);
}
