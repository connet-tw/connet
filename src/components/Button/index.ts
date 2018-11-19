import { Button as Base } from "src/theme/primitives";
import { styled, css } from "src/theme";

interface ButtonProps {
  to?: string;
  variant?: "primary" | "secondary" | "white";
  contained?: boolean;
}

const defaultStyle = css<ButtonProps>`
  ${props => css`
    padding: ${props.theme.sizes[2]};
    border: ${props.theme.borders[1]};
    background: ${props.contained ? props.theme.colors.grey[200] : "transparent"};
    border-radius: ${props.theme.radii[2]};
    transition: all .3s ease-out;
    border-color: ${props.contained ? props.theme.colors.grey[200] : props.theme.colors.text.light};
    color: ${props.theme.colors.text.dark};
    background: ${props.contained ? props.theme.colors.grey[200] : "transparent"};
    &:hover {
      border-color: ${props.contained ? props.theme.colors.grey[200] : props.theme.colors.text.main};
      background: ${props.contained ? props.theme.colors.grey[300] : props.theme.colors.grey[200]};
    }
    &:focus {
      outline: none;
      background: ${props.contained ? props.theme.colors.grey[300] : props.theme.colors.grey[200]};
    }
  `}
`;

const primary = css<ButtonProps>`
  ${props => css`
    border-color: ${props.theme.colors.primary.main};
    color: ${props.theme.colors.primary[props.contained ? "contrast" : "main"]};
    background: ${props.contained ? props.theme.colors.primary.main : "transparent"};
    &:hover {
      border-color: ${props.theme.colors.primary.light};
      color: ${props.theme.colors.primary.contrast};
      background: ${props.theme.colors.primary[props.contained ? "light" : "main"]};
    }
    &:focus {
      outline: none;
      color: ${props.theme.colors.primary.contrast};
      background: ${props.theme.colors.primary[props.contained ? "dark" : "light"]};
    }
  `}
`;

const secondary = css<ButtonProps>`
  ${props => css`
    border-color: ${props.theme.colors.secondary.main};
    color: ${props.theme.colors.secondary[props.contained ? "contrast" : "main"]};
    background: ${props.contained ? props.theme.colors.secondary.main : "transparent"};
    &:hover {
      border-color: ${props.theme.colors.secondary.light};
      color: ${props.theme.colors.secondary.contrast};
      background: ${props.theme.colors.secondary[props.contained ? "light" : "main"]};
    }
    &:focus {
      outline: none;
      color: ${props.theme.colors.secondary.contrast};
      background: ${props.theme.colors.secondary[props.contained ? "dark" : "light"]};
    }
  `}
`;

const white = css<ButtonProps>`
  ${props => css`
    border-color: ${props.theme.colors.white.light};
    color: ${props.theme.colors.white[props.contained ? "contrast" : "light"]};
    background: ${props.contained ? props.theme.colors.white.light : "transparent"};
    &:hover {
      border-color: ${props.theme.colors.white.main};
      color: ${props.contained ? props.theme.colors.white.contrast : "light"};
      background: ${props.theme.colors.white[props.contained ? "light" : "main"]};
    }
    &:focus {
      outline: none;
      color: ${props.theme.colors.white.contrast};
      background: ${props.theme.colors.white[props.contained ? "main" : "main"]};
    }
  `}
`;

export const Button = styled(Base)<ButtonProps>`
  ${defaultStyle}
  ${props => (props.variant === "primary") && primary}
  ${props => (props.variant === "secondary") && secondary}
  ${props => (props.variant === "white") && white}
`;
