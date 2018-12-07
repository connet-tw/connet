import { Button as Base } from "src/theme/primitives";
import { styled, css } from "src/theme";

interface ButtonProps {
  to?: string;
  variant?: "primary" | "secondary" | "white";
  contained?: boolean;
  round?: boolean;
  outlined?: boolean;
  small?: boolean;
  large?: boolean;
}

const defaultStyle = css<ButtonProps>`
  border: ${props => props.theme.borders[1]};
  border-color: transparent;
  border-radius: ${props => props.theme.radii[2]};
  background: transparent;
  color: ${props => props.theme.colors.text.dark};
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  transition: all 400ms cubic-bezier(.08,.52,.52,1);
  padding: ${props => props.theme.sizes[2]} ${props => props.theme.sizes[3]};
  &:hover {
    background: ${props => props.theme.colors.action.hover};
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  ${props => props.outlined && css`
    border-color: ${props => props.theme.colors.text.light};
    &:hover {
      background: ${props => props.theme.colors.action.hover};
    }
    &:focus {
      outline: none;
      background: ${props => props.theme.colors.action.hover};
    }
  `}
  ${props => props.contained && css`
    border-color: transparent;
    background: ${props => props.theme.colors.text.light};
    color: ${props => props.theme.colors.white.light};
    &:hover {
      background: ${props => props.theme.colors.text.main};
    }
  `}
`;

const primary = css<ButtonProps>`
  color: ${props => props.theme.colors.primary.main};
  &:hover {
    background: ${props => props.theme.colors.action.hover};
    color: ${props => props.theme.colors.primary.dark};
  }
  &:focus {
    background: ${props => props.theme.colors.grey[200]};
  }
  ${props => props.outlined && css`
    border-color: ${props => props.theme.colors.primary.main};
    &:hover {
      background: ${props => props.theme.colors.primary.main};
      color: ${props => props.theme.colors.white.light};
    }
    &:focus {
      outline: none;
    }
  `}
  ${props => props.contained && css`
    border-color: ${props => props.theme.colors.primary.main};
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.white.main};
    &:hover {
      background: ${props => props.theme.colors.primary.light};
      color: ${props => props.theme.colors.white.main};
      border-color: ${props => props.theme.colors.primary.light};
    }
  `}
`;

const secondary = css<ButtonProps>`
  color: ${props => props.theme.colors.secondary.main};
  &:hover {
    background: ${props => props.theme.colors.action.hover};
    color: ${props => props.theme.colors.secondary.dark};
  }
  &:focus {
    background: ${props => props.theme.colors.grey[200]};
  }
  ${props => props.outlined && css`
    border-color: ${props => props.theme.colors.secondary.main};
    &:hover {
      background: ${props => props.theme.colors.secondary.main};
      color: ${props => props.theme.colors.white.light};
    }
    &:focus {
      outline: none;
    }
  `}
  ${props => props.contained && css`
    border-color: ${props => props.theme.colors.secondary.main};
    background: ${props => props.theme.colors.secondary.main};
    color: ${props => props.theme.colors.white.main};
    &:hover {
      background: ${props => props.theme.colors.secondary.light};
      color: ${props => props.theme.colors.white.main};
      border-color: ${props => props.theme.colors.secondary.light};
    }
  `}
`;

const white = css<ButtonProps>`
  color: ${props => props.theme.colors.white.main};
  &:hover {
    background: rgba(255,255,255,0.2);
    color: ${props => props.theme.colors.white.light};
  }
  &:focus {
    background: ${props => props.theme.colors.white.dark};
    color: ${props => props.theme.colors.white.contrast};
  }
  ${props => props.outlined && css`
    border-color: ${props => props.theme.colors.white.light};
    &:hover {
      background: ${props => props.theme.colors.white.light};
      color: ${props => props.theme.colors.white.contrast};
    }
    &:focus {
      outline: none;
    }
  `}
  ${props => props.contained && css`
    background: ${props => props.theme.colors.white.light};
    border-color: ${props => props.theme.colors.white.light};
    color: ${props => props.theme.colors.white.contrast};
    &:hover {
      background: ${props => props.theme.colors.white.main};
      color: ${props => props.theme.colors.white.contrast};
    }
  `}
`;

const small = css<ButtonProps>`
  padding: ${props => props.theme.sizes[1]} ${props => props.theme.sizes[2]};
  font-size: ${props => props.theme.fontSizes[1]};
`;

const large = css<ButtonProps>`
  padding: ${props => props.theme.sizes[3]} ${props => props.theme.sizes[3]};
  font-size: ${props => props.theme.fontSizes[3]};
`;

const round = css<ButtonProps>`
  padding: 0;
  text-align: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const Button = styled(Base)<ButtonProps>`
  ${defaultStyle}
  ${props => props.variant === "primary" && primary}
  ${props => props.variant === "secondary" && secondary}
  ${props => props.variant === "white" && white}
  ${props => props.small && small}
  ${props => props.large && large}
  ${props => props.round && round}
`;

export { Button, ButtonProps };
