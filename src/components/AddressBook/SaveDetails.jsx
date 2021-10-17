import React, { useContext } from "react";
import { ButtonsContainer } from "./styled";
import Button from "./Button";
import ContactContext from "./ContactContext";
import Grid from "@mui/material/Grid";

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
		<Grid
			xs="12"
			sm="12"
			ms="6"
			sx={{
				display: { sm: "inline-flex" },
				mt: "5em",
				ml: { xs: "1em", md: "4em" },
				"@media (min-height: 725px)": {
					marginTop: "15em",
				},
			}}
		>
			{unsavedEdits && (
				<>
					{/* SAVE */}
					<Button
						style={{
							color: "white",
							boxShadow: unsavedEdits
								? `0px 0px 9px 1px ${sc["primary"]}`
								: "none",
						}}
						onClick={addNewContact}
						bgColor={sc["primary"]}
						// color={sc["white"]}
						text="Save Contact"
					/>

					{/* CANCEL */}
					<Button
						size="small"
						variant="outlined"
						style={{ marginLeft: "2em" }}
						onClick={() => {
							setSelectedContact({ ...selectedContact });
							setUnsavedEdits(false);
							setNewEmail("");
						}}
						// color={sc["primary"]}
						bgColor={sc["white"]}
						text="Cancel"
					/>
				</>
			)}

			{/* DELETE */}
			{selectedContact.saved && (
				<Grid
					sx={{
						// mt: "5em",
						ml: { sm: "1em", md: "4em", lg: "10em" },
						mt: { xs: "1em", sm: "0em" },
					}}
				>
					<Button
						variant="outlined"
						onClick={deleteContact}
						// style={{ position: "absolute", right: "2em" }}
						color="error"
						bgColor={sc["white"]}
						text="Delete Contact"
					/>
				</Grid>
			)}
		</Grid>
	);
}
