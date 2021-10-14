import React, { useContext } from "react";
import { ButtonsContainer } from "./styled";
import Button from "./Button";
import ContactContext from "./ContactContext";

import sc from "../../styles-config";
export default function SaveDetails() {
	let {
		addNewContact,
		setSelectedContact,
		selectedContact,
		deleteContact,
		setNewEmail,
		unsavedEdits,
		setUnsavedEdits,
	} = useContext(ContactContext);

	return (
		<ButtonsContainer>
			{unsavedEdits && (
				<>
					{/* SAVE */}
					<Button
						style={{
							boxShadow: unsavedEdits
								? `0px 0px 9px 1px ${sc["primary"]}`
								: "none",
						}}
						onClick={addNewContact}
						bgColor={sc["primary"]}
						color={sc["white"]}
						text="Save Contact"
					/>

					{/* CANCEL */}
					<Button
						style={{ marginLeft: "2em" }}
						onClick={() => {
							setSelectedContact({ ...selectedContact });
							setUnsavedEdits(false);
							setNewEmail("");
						}}
						color={sc["primary"]}
						bgColor={sc["white"]}
						text="Cancel"
					/>
				</>
			)}

			{/* DELETE */}
			{selectedContact.saved && (
				<Button
					onClick={deleteContact}
					style={{ position: "absolute", right: "2em" }}
					color="red"
					bgColor={sc["white"]}
					text="Delete Contact"
				/>
			)}
		</ButtonsContainer>
	);
}
