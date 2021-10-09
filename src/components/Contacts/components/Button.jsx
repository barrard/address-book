import React from "react";
import { Button, Text } from "./styled";

export default function ButtonComponent({ text, color }) {
  return (
    <Button color={color}>
      <Text>{text}</Text>
    </Button>
  );
}
