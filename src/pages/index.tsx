import * as React from "react";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n/withIntl";

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      IndexPage
    </Layout>
  );
});

export default withIntl(IndexPage);
