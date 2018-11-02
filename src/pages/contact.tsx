import * as React from "react";
import { Layout } from "../components/Layout";
import { defineMessages  } from "react-intl";
import { withIntl } from "../i18n/withIntl";

defineMessages({
  title: {
    id: "app.title",
    description: "fake description",
    defaultMessage: "ctn"
  }
});

const ContactPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      ContactPage
    </Layout>
  );
});

export default withIntl(ContactPage);
