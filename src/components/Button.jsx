import React from "react";
import { Button, Text } from "./styled";

export default function ButtonComponent({ text, color, bgColor, borderColor }) {
	return (
		<Button bgColor={bgColor} color={color} borderColor={borderColor}>
			<Text>{text}</Text>
		</Button>
	);
}
