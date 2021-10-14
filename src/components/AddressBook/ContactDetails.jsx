import React, { useContext } from "react";
import Context from "./Context";
import { Margin, Flex, Padding, Label, ListContainer } from "./styled";
import Button from "./Button";
import FormInput from "./FormInput";
import EmailItem from "./EmailItem";

import sc from "../../styles-config";

export default function ContactDetails() {
	let {
		fName,
		setFName,
		lName,
		setLName,
		emails,
		edits,
		emailEdits,
		setEmailEdits,
		setEdits,
		setEmails,
		newEmail,
		setNewEmail,
	} = useContext(Context);

	const validateNewEmail = (newEmail) => {
		//https://stackoverflow.com/a/9204568/5231665
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!re.test(newEmail)) return alert("Invalid Email Address");
		if (emails.indexOf(newEmail) >= 0) return alert("Email already exists");
		return true;
	};
	return (
		<Margin t="5em" l="4em">
			{/* Name Inputs */}
			<Flex>
				<Padding r="1em">
					<FormInput
						onChange={(e) => {
							setFName(e.target.value);
							if (!edits) setEdits(true);
						}}
						value={fName}
						placeholder="first name"
						label="First Name"
					/>
				</Padding>
				<FormInput
					onChange={(e) => {
						setLName(e.target.value);
						if (!edits) setEdits(true);
					}}
					value={lName}
					placeholder="last name"
					label="Last Name"
				/>
			</Flex>

			{/* emails list */}
			<Label>Emails</Label>
			<ListContainer
			// style={{ display: "inline-block", paddingLeft: "5px" }}
			>
				<Padding
					style={{
						maxHeight: "400px",
						overflowX: "auto",
						width: "20em",
					}}
					display="inline-block"
					l="5px"
				>
					{/* <div style={{ maxHeight: "400px", overflow: "scroll" }}> */}
					{emails.map((email) => (
						<EmailItem
							key={email}
							email={email}
							emails={emails}
							setEmails={setEmails}
						/>
					))}
					{/* </div> */}
				</Padding>
			</ListContainer>
			{/* Email input and submit */}
			<Flex align="center">
				<Padding r="1em">
					<FormInput
						onChange={(e) => {
							setNewEmail(e.target.value);
							if (!emailEdits) setEmailEdits(true);
						}}
						value={newEmail}
						placeholder="email"
						type="email"
					/>
				</Padding>
				<Button
					style={{
						boxShadow: emailEdits ? "0px 0px 10px 2px red" : "none",
					}}
					onClick={() => {
						//validate email
						if (validateNewEmail(newEmail)) {
							setEmails([...emails, newEmail]);
							setNewEmail("");
							setEmailEdits(false);
							if (!edits) setEdits(true);
						}
					}}
					bgColor={sc["primary"]}
					color={sc["white"]}
					text="Add email"
				></Button>
			</Flex>
		</Margin>
	);
}
