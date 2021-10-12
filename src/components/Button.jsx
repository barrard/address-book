import React from "react";
import { Button, Text } from "./styled";

export default function ButtonComponent({
	onClick,
	text,
	color,
	bgColor,
	borderColor,
	style,
}) {
	return (
		<Button
			style={{ ...style }}
			onClick={onClick}
			bgColor={bgColor}
			color={color}
			borderColor={borderColor}
		>
			<Text>{text}</Text>
		</Button>
	);
}
