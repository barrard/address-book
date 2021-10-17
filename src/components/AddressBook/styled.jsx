import styled from "styled-components";
import sc from "../../styles-config";
import { Add as MuiAddIcon } from "@material-ui/icons";

import {
	Button as MuiButton,
	IconButton as MuiIconButton,
	Paper,
	Typography,
	TextField,
	InputAdornment,
} from "@mui/material";

export const Button = ({
	size = "medium",
	color = "primary",
	children,
	variant = "contained",
	style,
	onClick,
}) => (
	<MuiButton
		onClick={onClick}
		style={{
			...style,
			textTransform: "none",
			userSelect: "none",
			minWidth: "133px",
			height: "36px",
		}}
		size={size}
		color={color}
		variant={variant}
	>
		{children}
	</MuiButton>
);

export const ButtonsContainer = styled.div`
	padding-left: 5em;
	position: absolute;
	bottom: 3em;
	height: 3em;
	display: flex;
	width: 100%;
`;
export const DetailsContainer = styled.div`
	/* width: 800px; */
	width: 100%;
	background: ${sc["light-1"]};
	position: relative;
`;

export const EmailsList = ({ style, children }) => (
	<Paper style={{ display: "inline-flex", ...style }}>{children}</Paper>
);

export const Flex = styled.div`
	position: relative;
	display: flex;
	justify-content: ${({ justify }) => justify || "unset"};
	align-items: ${({ align }) => align || "unset"};
`;

export const FullScreenContainer = styled.div`
	min-width: 100vw;
	max-width: 100vw;
	min-height: 100vh;
	/* max-height: 100vh; */
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	justify-content: center;
	background: #599;
`;

export const Input = ({ icon, label, value, onChange, type, placeholder }) => (
	<TextField
		size="small"
		value={value}
		onChange={onChange}
		// type={type}
		placeholder={placeholder}
		label={label}
		InputProps={{
			endAdornment: (
				<InputAdornment position="end">{icon}</InputAdornment>
			),
		}}
		// endAdornment={<InputAdornment position="end">kg</InputAdornment>}
	/>
);

export const InputIcon = styled.div`
	position: absolute;
	right: 15px;
`;

export const Label = ({ style, children, variant = "p" }) => (
	<Typography
		variant={variant}
		style={{
			display: "inline-block",
			// color: #999,
			fontSize: "14px",
			lineHeight: "19px",
			fontFamily: sc["font-family"],
			paddingLeft: "15px",
			...style,
		}}
	>
		{children}
	</Typography>
);

export const LightBorder = styled.div`
	border: 1px solid ${sc["light-2"]};
	border-radius: ${sc["border-radius"]};

	&:focus-visible {
		outline: black;
	}
`;

export const ListContainer = styled.div`
	/* position: relative; */
	overflow-y: auto;
	/* height: 100%; */
`;

export const Margin = styled.div`
	padding: ${({ m }) => m};
	margin-top: ${({ t, v }) => t || v};
	margin-left: ${({ l, h }) => l || h};
	margin-right: ${({ r, h }) => r || h};
	margin-bottom: ${({ b, v }) => b || v};
	background: ${(background) => background || "inherit"};
`;

export const Padding = styled.div`
	display: ${({ display }) => display};
	padding: ${({ p }) => p};
	padding-top: ${({ t, v }) => t || v};
	padding-left: ${({ l, h }) => l || h};
	padding-right: ${({ r, h }) => r || h};
	padding-bottom: ${({ b, v }) => b || v};
	background: ${(background) => background || "inherit"};
`;

export const RedCircle = styled.div`
	cursor: pointer;
	border-radius: 50%;
	border: 1px solid red;
	width: 1em;
	height: 1em;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: normal;

	&:hover {
		background: rgba(111, 111, 111, 0.5);
		font-weight: normal;
	}
`;

export const RoundButton = ({ onClick, style, icon, size = "small" }) => (
	<MuiIconButton onClick={onClick} size={size} style={{ ...style }}>
		{icon}
	</MuiIconButton>
);

export const AddButton = ({ onClick, addNew }) => {
	return (
		<RoundButton
			onClick={onClick}
			icon={<MuiAddIcon />}
			style={{
				background: sc["primary"],
				color: sc["white"],
				boxShadow: addNew ? `0px 0px 9px 1px ${sc["primary"]}` : "none",
			}}
		/>
	);
};

export const SideBarContainer = styled.div`
	background: ${sc["white"]};
	display: flex;
	flex-direction: column;
	min-width: ${sc["sideWidth"]};
	max-width: ${sc["sideWidth"]};
	overflow: hidden;
`;

export const StyledListItem = styled.div`
	color: ${sc["dark-2"]};
	background: ${({ selected }) => (selected ? sc["light-gradient"] : "none")};

	&:hover {
		background: ${sc["light-gradient"]};
		color: ${sc["dark-1"]};
	}
`;

export const StyledEmail = styled.a`
	color: ${sc["dark-2"]};
	text-decoration: none;
	font-family: ${sc["font-family"]};

	&:hover {
		color: ${sc["dark-1"]};
	}
`;

export const Title = ({ children }) => (
	<Typography
		style={{
			fontFamily: sc["font-family"],
			fontStyle: sc["font-style"],
			fontWeight: sc["font-weight"],
			fontSize: sc["title-font-size"],
			lineHeight: sc["title-line-height"],
		}}
	>
		{children}
	</Typography>
);
// export const Title = styled.span`
// 	font-family: ${sc["font-family"]};
// 	font-style: ${sc["font-style"]};
// 	font-weight: ${sc["font-weight"]};
// 	font-size: ${sc["title-font-size"]};
// 	line-height: ${sc["title-line-height"]};
// `;

export const Text = styled.span`
	color: ${({ color }) => color};
	font-family: ${sc["font-family"]};
	font-style: ${sc["font-style"]};
	font-weight: ${({ fontWeight }) =>
		fontWeight ? fontWeight : sc["font-weight"]};
	font-size: ${sc["font-size"]};
	line-height: ${sc["line-height"]};
`;
