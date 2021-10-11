import React from "react";
import sc from "../styles-config";
import { Text, Padding, StyledListItem } from "./styled";

export default function Contact({ name }) {
	const selected = false;
	return (
		<StyledListItem>
			<Padding h="1em" v="0.5em">
				<Text
					fontWeight={selected ? "700" : "400"}
					color={selected ? sc["black"] : "inherit"}
				>{`name ${name}`}</Text>
			</Padding>
		</StyledListItem>
	);
}
