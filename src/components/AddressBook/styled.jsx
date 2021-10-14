import styled from "styled-components";
import sc from "../../styles-config";

export const Button = styled.button`
	user-select: none;
	width: 133px;
	height: 36px;
	border: 1px solid ${({ borderColor, color }) => borderColor || color};
	color: ${({ color }) => color};
	background: ${({ bgColor }) => bgColor};
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0.1em;
	border-radius: ${({ round }) => (round ? "50%" : sc["border-radius"])};
	overflow: hidden;
	cursor: pointer;

	&:hover {
		border: 1px solid rgba(111, 111, 111, 0.5);
	}
`;

export const ButtonsContainer = styled.div`
	padding-left: 5em;
	position: absolute;
	bottom: 3em;
	height: 3em;
	display: flex;
	width: 100%;
`;
export const DetailsContainer = styled.div`
	width: 800px;
	background: ${sc["light-1"]};
	position: relative;
`;

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
	max-height: 100vh;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	justify-content: center;
	background: #599;
`;

export const Input = styled.input`
	width: 100%;
	min-width: 10px;
	font-family: ${sc["font-family"]};
	font-style: ${sc["font-style"]};
	font-weight: ${sc["font-weight"]};
	font-size: ${sc["font-size"]};
	line-height: ${sc["line-height"]};
	border: none;
	padding: 7px 15px;
	position: relative;

	::placeholder,
	::-webkit-input-placeholder {
		font-family: ${sc["font-family"]};
		font-style: ${sc["font-style"]};
		font-weight: ${sc["font-weight"]};
		font-size: ${sc["font-size"]};
		line-height: ${sc["line-height"]};
	}
	:-ms-input-placeholder {
		color: red;
		font-family: ${sc["font-family"]};
		font-style: ${sc["font-style"]};
		font-weight: ${sc["font-weight"]};
		font-size: ${sc["font-size"]};
		line-height: ${sc["line-height"]};
	}
`;

export const InputIcon = styled.div`
	position: absolute;
	right: 15px;
`;

export const Label = styled.label`
	color: #999;
	font-size: 14px;
	line-height: 19px;
	font-family: ${sc["font-family"]};
	padding-left: 15px;
`;

export const LightBorder = styled.div`
	border: 1px solid ${sc["light-2"]};
	border-radius: ${sc["border-radius"]};

	&:focus-visible {
		outline: black;
	}
`;

export const ListContainer = styled.div`
	overflow-y: auto;
	height: 100%;
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

export const RoundButton = styled.button`
	border: ${({ borderColor }) =>
		borderColor ? `1px solid ${borderColor}` : "none"};
	background: ${({ bgColor }) => bgColor};
	color: ${({ color }) => color};
	justify-content: center;
	align-items: center;
	padding: 0.3em;
	border-radius: 50%;
	display: inline-flex;
	min-width: 2em;
	min-height: 2em;
	font-size: 1em;
	cursor: pointer;
	transition: all 0.3;
	box-shadow: ${({ addNew }) => (addNew ? "0px 0px 9px 1px black" : "none")};

	&:hover {
		background: rgba(111, 111, 111, 0.5);
	}
`;

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
	background: ${({ selected }) => (selected ? sc["light-1"] : sc["white"])};

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

export const Title = styled.span`
	font-family: ${sc["font-family"]};
	font-style: ${sc["font-style"]};
	font-weight: ${sc["font-weight"]};
	font-size: ${sc["title-font-size"]};
	line-height: ${sc["title-line-height"]};
`;

export const Text = styled.span`
	color: ${({ color }) => color};
	font-family: ${sc["font-family"]};
	font-style: ${sc["font-style"]};
	font-weight: ${({ fontWeight }) =>
		fontWeight ? fontWeight : sc["font-weight"]};
	font-size: ${sc["font-size"]};
	line-height: ${sc["line-height"]};
`;
