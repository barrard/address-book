import React from "react";
import { Button, Text } from "./styled";

export default function ButtonComponent({
	onClick,
	text,
	color,
	bgColor,
	borderColor,
	style,
	variant,
	size,
}) {
	return (
		<Button
			size={size}
			variant={variant}
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
