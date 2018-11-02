import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Hero } from "../../sections/Hero";
import { AboutSummary, Highlight } from "../../sections/About";
import { Categories } from "../../sections/Categories";
import { FormattedMessage } from "react-intl";
import { hero, services, about, highlights } from "./IndexPage.messages";

const hs: Highlight[] = [1,2,3,4].map((x) => (
  {
    heading: <FormattedMessage {...highlights["heading" + x]}/>,
    subheading: <FormattedMessage {...highlights["subheading" + x]}/>,
  })
);

interface Data {
  headerImg: any;
  microgridImg: any;
  scadaImg: any;
  floodControlImg: any;
  emsImg: any;
}

const IndexPage: React.SFC<{}> = (() => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data: Data) =>
      <>
        <Hero
          heading={<FormattedMessage {...hero.heading}/>}
          subheading={<FormattedMessage {...hero.subheading}/>}
          image={data.headerImg}
        />
        <AboutSummary
          heading={<FormattedMessage {...about.heading }/>}
          subheading={<FormattedMessage {...about.subheading } />}
          highlights={hs}
        />
        <Categories
          heading={<FormattedMessage {...services.heading}/>}
          subheading={<FormattedMessage {...services.subheading}/>}
          categoryLinks={[
            {
              image: data.scadaImg,
              to: "/services#scada",
              label: <FormattedMessage id="services.scada.heading"/>,
              text: <FormattedMessage id="services.scada.subheading"/>,
              buttonText: "Learn More"
            },
            {
              image: data.microgridImg,
              to: "/services#id",
              label: <FormattedMessage id="services.microgrid.heading"/>,
              buttonText: "Learn More"
            },
            {
              image: data.emsImg,
              to: "/services#ems",
              label: <FormattedMessage id="services.ems.heading"/>,
              buttonText: "Learn More"
            },
            {
              image: data.floodControlImg,
              to: "/services#floodControl",
              label: <FormattedMessage id="services.floodControl.heading"/>,
              buttonText: "Learn More"
            },
          ]}
        />
      </>
    }
  />)
);

export {
  IndexPage,
};
