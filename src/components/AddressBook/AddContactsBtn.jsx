import React, { useContext } from "react";
import Context from "./Context";
import { AddButton } from "./styled";

import sc from "../../styles-config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddContactsBtn() {
	let { createNewContact, addNew, setAddNew } = useContext(Context);

	return (
		<AddButton
			addNew={addNew}
			onClick={() => {
				console.log("click");
				setAddNew(true);
				createNewContact();
			}}
		>
			{/* <FontAwesomeIcon icon={faPlus} /> */}
		</AddButton>
	);
}
