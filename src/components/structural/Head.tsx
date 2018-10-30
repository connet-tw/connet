import * as React from "react";
import Helmet from "react-helmet";

const Head: React.SFC<{}> = () => (
  <Helmet
    title={"Valen International"}
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

export default Head;
