import * as React from "react";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { IndexPage } from "../components/pages";

const Index: React.SFC<{}> = (() => {
  return (
    <Layout>
      <IndexPage/>
    </Layout>
  );
});

export default withIntl(Index);
