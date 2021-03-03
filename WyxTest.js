import React from "react";
import { Title } from "./components/Title";

export const WyxTest = ({ name = "World" }) => {
  return <Title>Hello {name}!</Title>;
};
