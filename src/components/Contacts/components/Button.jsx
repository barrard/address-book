import React from "react";
import { Button, Text } from "./styled";

export default function ButtonComponent({ text, color, round }) {
  return (
    <Button round={round} color={color}>
      <Text>{text}</Text>
    </Button>
  );
}
