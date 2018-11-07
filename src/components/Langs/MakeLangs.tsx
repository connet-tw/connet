import * as React from "react";
import { navigate } from "gatsby";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { languages  } from "../../i18n";

interface InjectedLangsProps {
  handleClick(code: string): void;
  languages: typeof languages; 
  locale: string;
}

type MakeLangsProps = {
  children(props: InjectedLangsProps): React.ReactNode;
} & InjectedIntlProps;

class MakeLangsBase extends React.Component<MakeLangsProps, {}> {
  handleClick = (code: string) => {
    localStorage.setItem("language", code);
    const path = window.location.pathname
      .split("/")
      .map((x,i) => (i===1) ? code : x)
      .join("/");
    return navigate(path);
  }
  render() {
    this.props.intl.messages
    return this.props.children({
      handleClick: this.handleClick,
      locale: this.props.intl.locale,
      languages: languages
    });
  }
}

const MakeLangs = injectIntl(MakeLangsBase);

export {
  MakeLangs
};
