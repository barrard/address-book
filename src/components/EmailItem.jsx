import React, { useState } from "react";
import {
	StyledListItem,
	StyledEmail,
	Padding,
	Flex,
	RedCircle,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faMinus } from "@fortawesome/free-solid-svg-icons";
import sc from "../styles-config";
export default function EmailItem({ email }) {
	const [hovered, setHovered] = useState(false);
	return (
		<StyledListItem
			onMouseEnter={() => {
				setHovered(true);
				console.log("hover");
			}}
			onMouseLeave={() => {
				setHovered(false);
				console.log("leave");
			}}
			onClick={() => console.log(email)}
		>
			<Padding v="0.5em">
				<Flex>
					<StyledEmail href={`mailto: ${email}`}>{email}</StyledEmail>
					{/* {!hovered && ( */}
					<Padding
						onClick={() => {
							console.log("remove");
						}}
						display="inline"
						l="1em"
					>
						<RedCircle>
							<FontAwesomeIcon
								color={sc["red"]}
								size="xs"
								icon={faMinus}
							/>
						</RedCircle>
					</Padding>
					{/* )} */}
				</Flex>
			</Padding>
		</StyledListItem>
	);
}
