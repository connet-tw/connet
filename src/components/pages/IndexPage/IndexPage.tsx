import * as React from "react";
import { Data, query } from "./IndexPage.query";
import { StaticQuery } from "gatsby";
import { Hero } from "../../sections/Hero";
import { AboutSummary, Highlight } from "../../sections/About";
import { Categories } from "../../sections/Categories";
import { FormattedMessage } from "react-intl";
import { messages } from "./IndexPage.messages";

const highlights: Highlight[] = [
  {
    heading: <FormattedMessage {...messages.highlightHeading1}/>,
    subheading: <FormattedMessage {...messages.highlightSubheading1 }/>,
  },
  {
    heading: <FormattedMessage {...messages.highlightHeading2}/>,
    subheading: <FormattedMessage {...messages.highlightSubheading3 }/>,
  },
  {
    heading: <FormattedMessage {...messages.highlightHeading3}/>,
    subheading: <FormattedMessage {...messages.highlightSubheading3 }/>,
  },
  {
    heading: <FormattedMessage {...messages.highlightHeading4}/>,
    subheading: <FormattedMessage {...messages.highlightSubheading4 }/>,
  },
];

const IndexPage: React.SFC<{}> = (() => (
  <StaticQuery
    query={query}
    render={(data: Data) =>
      <>
        <Hero
          heading={<FormattedMessage id="index.hero.heading"/>}
          subheading={<FormattedMessage id="index.hero.subheading"/>}
          image={data.headerImg}
        />
        <AboutSummary
          heading={<FormattedMessage id="about.heading"/>}
          subheading={<FormattedMessage id="about.heading"/>}
          highlights={highlights}
        />
        <Categories
          heading={<FormattedMessage id="index.services.heading"/>}
          subheading={<FormattedMessage id="index.services.subheading"/>}
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
