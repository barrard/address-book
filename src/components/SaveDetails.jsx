import React, { useContext } from "react";
import { ButtonsContainer } from "./styled";
import Button from "./Button";
import Context from "../Context";

import sc from "../styles-config";
export default function SaveDetails() {
	let {
		saveContact,
		setSelectedContact,
		selectedContact,
		deleteContact,
		setNewEmail,
		edits,
	} = useContext(Context);
	console.log(selectedContact.edits);
	return (
		<ButtonsContainer>
			{selectedContact.edits && (
				<>
					{/* SAVE */}
					<Button
						style={{
							boxShadow: edits ? "0px 0px 10px 2px red" : "none",
						}}
						onClick={saveContact}
						bgColor={sc["primary"]}
						color={sc["white"]}
						text="Save Contact"
					/>

					{/* CANCEL */}
					<Button
						style={{ marginLeft: "2em" }}
						onClick={() => {
							setSelectedContact({
								...selectedContact,
								edits: false,
							});
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
