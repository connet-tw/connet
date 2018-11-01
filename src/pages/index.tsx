import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n/withIntl";
import { Hero } from "../components/sections/Hero";
import { Categories } from "../components/sections/Categories";
import { FormattedMessage } from "react-intl";

interface IndexPageProps {
  data: {
    headerImg: any,
    microgridImg: any,
    scadaImg: any,
    floodControlImg: any,
    emsImg: any,
  };
}

const IndexPage: React.SFC<IndexPageProps> = (({ data }) => {
  return (
    <Layout>
      <Hero
        heading={<FormattedMessage id="index.hero.heading"/>}
        subheading={<FormattedMessage id="index.hero.subheading"/>}
        text={[
          <FormattedMessage id="index.hero.paragraph1"/>,
          <FormattedMessage id="index.hero.paragraph2"/>,
        ]}
        image={data.headerImg}
      />
      <Categories
        heading={<FormattedMessage id="index.services.heading"/>}
        subheading={<FormattedMessage id="index.services.subheading"/>}
        categoryLinks={[
          {
            image: data.scadaImg,
            to: "/services",
            label: <FormattedMessage id="services.scada"/>,
          },
          {
            image: data.microgridImg,
            to: "/services",
            label: <FormattedMessage id="services.microgrid"/>,
          },
          {
            image: data.emsImg,
            to: "/services",
            label: <FormattedMessage id="services.energyManagement"/>,
          },
          {
            image: data.floodControlImg,
            to: "/services",
            label: <FormattedMessage id="services.floodControl"/>,
          },
        ]}
      />
    </Layout>
  );
});

export default withIntl(IndexPage);

export const query = graphql`
  query IndexPageQuery {
    headerImg: file(relativePath: {eq: "359340-gradient-wallpaper-blue.png"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    microgridImg: file(relativePath: {eq: "fushan__overview.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    scadaImg: file(relativePath: {eq: "header/scada.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emsImg: file(relativePath: {eq: "header/energy-management.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floodControlImg: file(relativePath: {eq: "header/flood-control.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
