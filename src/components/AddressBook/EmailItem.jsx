import React, { useState, useContext } from "react";
import {
	StyledListItem,
	StyledEmail,
	Padding,
	Flex,
	RedCircle,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import sc from "../../styles-config";
import ContactContext from "./ContactContext";
export default function EmailItem({ email, emails, setEmails }) {
	let { setUnsavedEdits } = useContext(ContactContext);
	const [hovered, setHovered] = useState(false);
	return (
		<StyledListItem
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => {
				setHovered(false);
			}}
		>
			<Padding l="5px" v="0.5em">
				<Flex>
					<StyledEmail href={`mailto: ${email}`}>{email}</StyledEmail>
					{hovered && (
						<RedCircle
							style={{ right: "1em", position: "absolute" }}
							onClick={() => {
								let index = emails.indexOf(email);
								emails.splice(index, 1);
								setEmails([...emails]);
								setUnsavedEdits(true);
							}}
						>
							<FontAwesomeIcon
								color={sc["red"]}
								size="xs"
								icon={faMinus}
							/>
						</RedCircle>
					)}
				</Flex>
			</Padding>
		</StyledListItem>
	);
}
