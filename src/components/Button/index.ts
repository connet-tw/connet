import { Button as Base } from "src/theme/primitives";
import { styled, css, theme } from "src/theme";

interface ButtonProps {
  to?: string;
  variant?: "primary" | "secondary" | "white";
  contained?: boolean;
}

const defaultStyle = css<ButtonProps>`
  ${props => css`
    padding: ${theme.space(2)} ${theme.space(2)};
    border: ${theme.border(1)};
    background: ${props.contained ? theme.color("grey.200") : "transparent"};
    border-radius: ${theme.radius(2)};
    transition: all .3s ease-out;
    border-color: ${theme.color(props.contained ? "grey.200" : "text.light")};
    color: ${theme.color("text.dark")};
    background: ${props.contained ? theme.color("grey.200") : "transparent"};
    &:hover {
      border-color: ${props.contained ? theme.color("grey.200") : "text.main"};
      background: ${theme.color(props.contained ? "grey.300" : "grey.200")};
    }
    &:focus {
      outline: none;
      background: ${theme.color(props.contained ? "grey.300" : "grey.300")};
    }
  `}
`;

const primary = css<ButtonProps>`
  ${props => css`
    border-color: ${theme.color("primary.main")};
    color: ${theme.color(props.contained ? "primary.contrast" : "primary.main")};
    background: ${props.contained ? theme.color("primary.main") : "transparent"};
    &:hover {
      border-color: ${theme.color("primary.light")};
      color: ${theme.color("primary.contrast")};
      background: ${theme.color(props.contained ? "primary.light" : "primary.main")};
    }
    &:focus {
      outline: none;
      color: ${theme.color("primary.contrast")};
      background: ${theme.color(props.contained ? "primary.dark" : "primary.light")};
    }
  `}
`;

const secondary = css<ButtonProps>`
  ${props => css`
    border-color: ${theme.color("secondary.main")};
    color: ${theme.color(props.contained ? "secondary.contrast" : "secondary.main")};
    background: ${props.contained ? theme.color("secondary.main") : "transparent"};
    &:hover {
      border-color: ${theme.color("secondary.light")};
      color: ${theme.color("secondary.contrast")};
      background: ${theme.color(props.contained ? "secondary.light" : "secondary.main")};
    }
    &:focus {
      outline: none;
      color: ${theme.color("secondary.contrast")};
      background: ${theme.color(props.contained ? "secondary.dark" : "secondary.light")};
    }
  `}
`;

const white = css<ButtonProps>`
  ${props => css`
    border-color: ${theme.color("white.main")};
    color: ${theme.color(props.contained ? "white.contrast" : "text.dark")};
    background: ${props.contained ? theme.color("white.light") : "transparent"};
    &:hover {
      border-color: ${theme.color("white.light")};
      color: ${theme.color("white.contrast")};
      background: ${theme.color(props.contained ? "white.light" : "white.main")};
    }
    &:focus {
      outline: none;
      background: ${theme.color(props.contained ? "white.dark" : "grey.300")};
    }
  `}
`;

export const Button = styled(Base)<ButtonProps>`
  ${defaultStyle}
  ${props => (props.variant === "primary") && primary}
  ${props => (props.variant === "secondary") && secondary}
  ${props => (props.variant === "white") && white}
`;
