import React from "react";
import { Margin, Flex, Padding, Label, ListContainer } from "./styled";
import Button from "./Button";
import FormInput from "./FormInput";
import EmailItem from "./EmailItem";

import { emails } from "../State";
import sc from "../styles-config";

export default function ContactDetails() {
	return (
		<Margin t="5em" l="4em">
			{/* Name Inputs */}
			<Flex>
				<Padding r="1em">
					<FormInput placeholder="first name" label="First Name" />
				</Padding>
				<FormInput placeholder="last name" label="Last Name" />
			</Flex>

			{/* emails list */}
			<Label>Emails</Label>
			<ListContainer>
				<Padding display="inline-block" l="5px">
					{emails.map((email) => (
						<EmailItem email={`email${email}@gmail.com`} />
					))}
				</Padding>
			</ListContainer>

			{/* Email input and submit */}
			<Flex align="center">
				<Padding r="1em">
					<FormInput placeholder="email" type="email" />
				</Padding>
				<Button
					bgColor={sc["primary"]}
					color={sc["white"]}
					text="Add email"
				></Button>
			</Flex>
		</Margin>
	);
}
