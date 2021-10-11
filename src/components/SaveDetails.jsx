import React, { useContext } from "react";
import { ButtonsContainer, Flex, Padding } from "./styled";
import Button from "./Button";
import Context from "../Context";

import sc from "../styles-config";
export default function SaveDetails() {
	let { saveContact, setSelectedContact, selectedContact, deleteContact } =
		useContext(Context);
	return (
		<ButtonsContainer>
			<Flex justify="space-between">
				<Flex>
					<Padding l="5em" r="1.5em" display="inline">
						{/* SAVE */}
						<Button
							onClick={() => {
								console.log("save");

								saveContact();
							}}
							bgColor={sc["primary"]}
							color={sc["white"]}
							text="Save Contact"
						/>
					</Padding>
					{/* CANCEL */}
					<Button
						onClick={() => {
							setSelectedContact({ ...selectedContact });
						}}
						color={sc["primary"]}
						bgColor={sc["white"]}
						text="Cancel"
					/>
				</Flex>
				<Padding l="15em" display="inline">
					{/* DELETE */}
					<Button
						onClick={deleteContact}
						style={{ position: "absolute", right: "1em" }}
						color="red"
						bgColor={sc["white"]}
						text="Delete Contact"
					/>
				</Padding>
			</Flex>
		</ButtonsContainer>
	);
}
