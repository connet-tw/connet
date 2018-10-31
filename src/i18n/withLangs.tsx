import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { navigate } from "gatsby";

export type WithLangsProps = {
  handleClick(code: string): void;
  locale: string;
} & InjectedIntlProps;

export const withLangs = <P extends WithLangsProps>(Component: React.ComponentType<P>) =>
  injectIntl(class WithLangs extends React.Component<P> {
    handleClick = (code: string) => {
      console.log(code);
      localStorage.setItem("language", code);
      return navigate("/" + code);
    }
    render() {
      return (
        <Component
          locale={this.props.intl.locale}
          handleClick={this.handleClick}
          {...this.props}
        />
      );
    }
  });
