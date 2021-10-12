import React from "react";
import { Input, Flex, LightBorder, Margin, Label, InputIcon } from "./styled";
import sc from "../styles-config";
export default function FormInput({
	value,
	onChange,
	label,
	icon,
	placeholder,
	type = "text",
}) {
	return (
		<div>
			<Label htmlFor={label}>{label}</Label>
			<Margin b="1em" background={sc["white"]}>
				<LightBorder>
					<Flex align="center">
						<Input
							value={value}
							onChange={onChange}
							type={type}
							placeholder={placeholder}
						/>
						{icon && <InputIcon>{icon}</InputIcon>}
					</Flex>
				</LightBorder>
			</Margin>
		</div>
	);
}
