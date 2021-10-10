import React from "react";
import { DetailsContainer, Input } from "./styled";
import Button from "./Button";

export default function Details() {
  return (
    <DetailsContainer>
      <Input />

      <Button color="red" text="Button"></Button>
      <Button color="red" text="ButtonButton"></Button>
    </DetailsContainer>
  );
}
