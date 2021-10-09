import React from "react";

//testing
import {
  ShowComponent,
  SideBarContainer,
  Input,
  ListContainer,
  ListItem,
  FullScreenContainer,
  Text,
} from "./components/styled";
import Button from "./components/Button";
import SideBar from "./components/SideBar";
import Details from "./components/Details";

export default function Contacts() {
  return (
    <FullScreenContainer>
      {/* <ShowComponent text="input">
        <Input />
      </ShowComponent>
      <ShowComponent text="??">
        <Button color="red" text="Button"></Button>
        <Button color="red" text="ButtonButton"></Button>
      </ShowComponent>
      <ShowComponent text="Side"> */}
      <SideBar />
      <Details />
    </FullScreenContainer>
  );
}
