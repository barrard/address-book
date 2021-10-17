import React, { useContext } from "react";
import { Scrollable } from "webrix/components";
import Container from "@mui/material/Container";

import Context from "./Context";
import {
	Margin,
	Flex,
	Padding,
	Label,
	ListContainer,
	EmailsList,
} from "./styled";
import Button from "./Button";
import FormInput from "./FormInput";
import EmailItem from "./EmailItem";

import Grid from "@mui/material/Grid";

import sc from "../../styles-config";

import ContactContext from "./ContactContext";
export default function ContactDetails() {
	let {
		fName,
		setFName,
		lName,
		setLName,
		emails,
		unsavedEdits,
		emailEdits,
		setEmailEdits,
		setUnsavedEdits,
		setEmails,
		newEmail,
		setNewEmail,
	} = useContext(ContactContext);

	const validateNewEmail = (newEmail) => {
		//https://stackoverflow.com/a/9204568/5231665
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!re.test(newEmail)) return alert("Invalid Email Address");
		if (emails.indexOf(newEmail) >= 0) return alert("Email already exists");
		return true;
	};

	return (
		<Grid
			sx={{
				mt: "5em",
				mr: "1em",
				pr: "1em",
				ml: { xs: "1em", md: "4em" },
			}}
		>
			{/* Name Inputs */}
			<Flex>
				<Padding r="1em">
					<FormInput
						onChange={(e) => {
							setFName(e.target.value);
							if (!unsavedEdits) setUnsavedEdits(true);
						}}
						value={fName}
						placeholder="first name"
						label="First Name"
					/>
				</Padding>
				<FormInput
					onChange={(e) => {
						setLName(e.target.value);
						if (!unsavedEdits) setUnsavedEdits(true);
					}}
					value={lName}
					placeholder="last name"
					label="Last Name"
				/>
			</Flex>

			<div
				style={{
					marginTop: "2em",
					marginBottom: "2em",
					display: "inline-flex",
					flexDirection: "column",
				}}
			>
				{/* emails list */}
				<Label style={{ fontWeight: "bold" }} variant="h6">
					Emails
				</Label>
				<EmailsList>
					<div
						style={{ height: "200px", width: "20em" }}
						className="scrollbar-shadow"
					>
						<Scrollable.Shadow>
							<Scrollable>
								<div
									style={{
										maxHeight: "300px",
									}}
								>
									{emails.length <= 0 && (
										<Label variant="h6">No emails</Label>
									)}
									{emails.length > 0 &&
										emails.map((email) => (
											<EmailItem
												key={email}
												email={email}
												emails={emails}
												setEmails={setEmails}
											/>
										))}
								</div>
							</Scrollable>
						</Scrollable.Shadow>
					</div>
				</EmailsList>
			</div>

			{/* Email input and submit */}
			<Flex align="center">
				<Padding r="1em">
					<FormInput
						label="Email"
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
						color: "white",
						boxShadow: emailEdits
							? `0px 0px 10px 2px ${sc["primary"]}`
							: "none",
					}}
					onClick={() => {
						//validate email
						if (validateNewEmail(newEmail)) {
							setEmails([...emails, newEmail]);
							setNewEmail("");
							setEmailEdits(false);
							if (!unsavedEdits) setUnsavedEdits(true);
						}
					}}
					bgColor={sc["primary"]}
					// color={sc["white"]}
					text="Add email"
				></Button>
			</Flex>
		</Grid>
	);
}
