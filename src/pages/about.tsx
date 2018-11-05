import * as React from "react";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n/withIntl";
import { AboutPage } from "../components/pages";

const About: React.SFC<{}> = (() => {
  return (
    <Layout>
      <AboutPage/>
    </Layout>
  );
});

export default withIntl(About);
