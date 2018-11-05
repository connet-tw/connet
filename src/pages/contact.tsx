import * as React from "react";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n/withIntl";
import { ContactPage } from "../components/pages";

const Contact: React.SFC<{}> = (() => {
  return (
    <Layout>
      <ContactPage/>
    </Layout>
  );
});

export default withIntl(Contact);
