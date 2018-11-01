import * as React from "react";
import Helmet from "react-helmet";
import { injectIntl, InjectedIntlProps } from "react-intl";

const Head: React.SFC<InjectedIntlProps> = ({ intl }) => (
  <Helmet
    title={intl.formatMessage({id: "app.title"})}
    htmlAttributes={{lang: "en"}}
    meta={[
      {name: "description", content: "Valen International"},
    ]}
    link={[
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Muli:300,400,700"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
    ]}
  />
);

export default injectIntl(Head);
