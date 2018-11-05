import * as React from "react";
import Helmet from "react-helmet";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { messages } from "./Head.messages";

const Head: React.SFC<InjectedIntlProps> = ({ intl }) => (
  <Helmet
    title={intl.formatMessage(messages.title)}
    htmlAttributes={{lang: intl.locale}}
    meta={[
      {name: "description", content: "Controlnet International"},
    ]}
    link={[
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Muli:300,400,700"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
    ]}
  />
);

export default injectIntl(Head);
