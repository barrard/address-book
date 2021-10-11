import React from "react";
import { ButtonsContainer, Flex, Padding } from "./styled";
import Button from "./Button";

import sc from "../styles-config";
export default function SaveDetails() {
	return (
		<ButtonsContainer>
			<Flex justify="space-between">
				<Flex>
					<Padding l="5em" r="1.5em" display="inline">
						<Button
							bgColor={sc["primary"]}
							color={sc["white"]}
							text="Save Contact"
						/>
					</Padding>
					<Button
						color={sc["primary"]}
						bgColor={sc["white"]}
						text="Cancel"
					/>
				</Flex>
				<Padding l="15em" display="inline">
					<Button
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
