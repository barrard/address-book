import React from "react";
import { ShowComponent, SideBarContainer, Input, ListContainer, ListItem, FullScreenContainer, Text } from "./styled";
import { listItems } from "../../../State";
import ContactsList from "./ContactsList";
export default function SideBar() {
  return (
    <SideBarContainer>
      <ContactsList />
    </SideBarContainer>
  );
}
