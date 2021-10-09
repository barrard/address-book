import React from "react";
import { ShowComponent, SideBarContainer, Input, ListContainer, ListItem, FullScreenContainer, Text } from "./styled";
import { listItems } from "../../../State";

export default function ContactsList() {
  return (
    <ListContainer>
      {listItems.map((item) => (
        <ListItem>
          <Text>{`item ${item}`}</Text>
        </ListItem>
      ))}
    </ListContainer>
  );
}
