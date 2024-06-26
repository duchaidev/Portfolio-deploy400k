import styled from "styled-components";
import { DarkTheme, mediaQueries } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Roboto Mono", monospace;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 10;

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>GODZILLA</Logo>;
};

export default LogoComponent;
