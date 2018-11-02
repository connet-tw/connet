import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n/withIntl";
import { FormattedMessage } from "react-intl";
import { ImageSplit } from "../components/sections/ImageSplit";

interface ServicesPageProps {
  data: {
    headerImg: any,
    microgridImg: any,
    scadaImg: any,
    floodControlImg: any,
    emsImg: any,
  };
}

const ServicesPage: React.SFC<ServicesPageProps> = (({data}) => {
  return (
    <Layout>
      <ImageSplit
        id="scada"
        heading={<FormattedMessage id="services.scada.heading"/>}
        subheading={<FormattedMessage id="services.scada.subheading"/>}
        body={[
          <FormattedMessage id="services.scada.paragraph1"/>,
        ]}
        image={data.scadaImg}
      />
      <ImageSplit
        id="microgrids"
        reverse
        heading={<FormattedMessage id="services.microgrid.heading"/>}
        subheading={<FormattedMessage id="services.microgrid.subheading"/>}
        body={[
          <FormattedMessage id="services.microgrid.paragraph1"/>,
        ]}
        image={data.microgridImg}
      />
      <ImageSplit
        id="ems"
        heading={<FormattedMessage id="services.ems.heading"/>}
        subheading={<FormattedMessage id="services.ems.subheading"/>}
        body={[
          <FormattedMessage id="services.ems.paragraph1"/>,
        ]}
        image={data.emsImg}
      />
      <ImageSplit
        id="floodControl"
        reverse
        heading={<FormattedMessage id="services.floodControl.heading"/>}
        subheading={<FormattedMessage id="services.floodControl.subheading"/>}
        body={[
          <FormattedMessage id="services.floodControl.paragraph1"/>,
        ]}
        image={data.floodControlImg}
      />
    </Layout>
  );
});

export default withIntl(ServicesPage);

export const query = graphql`
  query ServicesPageQuery {
    microgridImg: file(relativePath: {eq: "header/microgrids.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    scadaImg: file(relativePath: {eq: "header/scada.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emsImg: file(relativePath: {eq: "header/energy-management.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floodControlImg: file(relativePath: {eq: "header/flood-control-2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
