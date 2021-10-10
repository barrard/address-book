import React from "react";

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
      <SideBar />
      <Details />
    </FullScreenContainer>
  );
}
