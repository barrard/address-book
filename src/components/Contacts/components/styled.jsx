import styled from "styled-components";
import sc from "../../../styles-config";

export const Button = styled.div`
  width: 116px;
  height: 36px;
  border: 1px solid ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1em;
  border-radius: ${sc["border-radius"]};
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: rgba(111, 111, 111, 0.5);
  }
`;

export const DetailsContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  /* height: 100%; */
`;

export const FullScreenContainer = styled.div`
  padding: 1em;
  min-width: 100vw;
  max-width: 100vw;

  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;

  border: 1px solid blue;
  overflow: hidden;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  font-family: ${sc["font-family"]};
  font-style: ${sc["font-style"]};
  font-weight: ${sc["font-weight"]};
  font-size: ${sc["font-size"]};
  line-height: ${sc["line-height"]};
  padding: 0.3em;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  overflow-y: scroll;
  height: 100%;
`;

export const ListItem = styled.div`
  border: 1px solid blue;
  padding: 3em;
`;

export const ShowComponent = styled.div`
  border: 1px solid red;
  &:before {
    content: "${({ text }) => text}";
    display: block;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const SideBarContainer = styled.div`
  /* height: 100%; */
  border: 1px solid red;
  width: 20%;
`;

export const Title = styled.span`
  font-family: ${sc["font-family"]};
  font-style: ${sc["font-style"]};
  font-weight: ${sc["font-weight"]};
  font-size: ${sc["font-size"]};
  line-height: ${sc["line-height"]};
`;

export const Text = styled.span`
  font-family: ${sc["font-family"]};
  font-style: ${sc["font-style"]};
  font-weight: ${sc["font-weight"]};
  font-size: ${sc["font-size"]};
  line-height: ${sc["line-height"]};
`;
