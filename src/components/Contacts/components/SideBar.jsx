import React from "react";
import { ShowComponent, SideBarContainer, Input, ListContainer, ListItem, RoundButton, Title } from "./styled";
import ContactsList from "./ContactsList";
export default function SideBar() {
  return (
    <SideBarContainer>
      <Title>Contacts</Title>
      <div>
        <RoundButton content="+" />
        {/* </RoundButton> */}
        <RoundButton>+</RoundButton>
        <RoundButton>+</RoundButton>
      </div>
      <ContactsList />
    </SideBarContainer>
  );
}
