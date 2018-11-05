import * as React from "react";
import { Layout } from "../components/Layout";
import { ServicesPage } from "../components/pages/ServicesPage";
import { withIntl } from "../i18n/withIntl";

const Services: React.SFC<{}> = (() => {
  return (
    <Layout>
      <ServicesPage/>
    </Layout>
  );
});

export default withIntl(Services);
