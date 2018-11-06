import * as React from "react";
import { Hero } from "../../sections/Hero";
import { AboutSummary, Highlight } from "../../sections/About";
import { Categories } from "../../sections/Categories";
import { FormattedMessage } from "react-intl";
import { indexHero, services as sm, about, highlights } from "../messages";

const hs: Highlight[] = [1,2,3,4].map((x) => (
  {
    heading: <FormattedMessage {...highlights["heading" + x]}/>,
    subheading: <FormattedMessage {...highlights["subheading" + x]}/>,
  })
);

interface IndexPageProps {
  headerImg: any;
  services: any;
}

const IndexPage: React.SFC<IndexPageProps> = (({ headerImg, services }) => {
  return(
    <>
      <Hero
        heading={<FormattedMessage {...indexHero.heading}/>}
        subheading={<FormattedMessage {...indexHero.subheading}/>}
        image={headerImg}
      />
      <AboutSummary
        heading={<FormattedMessage {...about.heading }/>}
        subheading={<FormattedMessage {...about.subheading } />}
        highlights={hs}
      />
      <Categories
        heading={<FormattedMessage {...sm.heading}/>}
        subheading={<FormattedMessage {...sm.subheading}/>}
        categoryLinks={services}
      />
    </>
  );}
);

export {
  IndexPage,
};
