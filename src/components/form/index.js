import React from "react";
import { Container, Profile, Img, Text, Span, Pane } from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.Span = function FormSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
Form.Pane = function FormPane({ ...restProps }) {
  return <Pane {...restProps} />;
};

Form.Profile = function FormProfile({ ...restProps }) {
  return <Profile {...restProps} />;
};
Form.Img = function FormImg({ ...restProps }) {
  return <Img {...restProps} />;
};
