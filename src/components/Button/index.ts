import { Button as Base } from "src/theme/primitives";
import { styled, css } from "src/theme";

interface ButtonProps {
  to?: string;
  variant?: "primary" | "secondary" | "white";
  contained?: boolean;
  round?: boolean;
  outlined?: boolean;
  size?: "small" | "large";
}

const defaultStyle = css<ButtonProps>`
  ${props => {
    const {theme, variant, size, contained, round, outlined} = props;
    const v = variant || "text";
    return css`
    padding: ${theme.sizes[size === "large" ? 3 : (size === "small" ? 1 : 2)]};
      border: ${theme.borders[1]};
      border-color: ${(contained || outlined) ? theme.colors[v].light : "transparent"};
      background: ${contained ? theme.colors[v].light : "transparent"};
      border-radius: ${round ? "50%" : theme.radii[2]};
      transition: all .3s ease-out;
      color: ${contained ? theme.colors[v].contrast : theme.colors[v].dark};
      &:hover {
        border-color: ${(contained || outlined) ? theme.colors[v].light : "transparent"};
        background: ${contained ? theme.colors[v].main : theme.colors[v].light};
      }
      &:active {
        outline: none;
      }
      &:focus {
        outline: none;
        background: ${contained ? theme.colors[v].dark : theme.colors.grey[200]};
      }
    `}
  }
`;

const Button = styled(Base)<ButtonProps>`
  -webkit-tap-highlight-color: transparent;
  ${defaultStyle}
`;

export { Button, ButtonProps };
