import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { FormattedMessage } from "react-intl";
import { ImageSplit } from "../../sections/ImageSplit";
import { scada, ems, microgrid, floodControl } from "../messages";

interface Data {
  headerImg: any;
  microgridImg: any;
  scadaImg: any;
  floodControlImg: any;
  emsImg: any;
}

const ServicesPage: React.SFC<{}> = (() => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data: Data) =>
      <>
        <ImageSplit
          id="scada"
          image={data.scadaImg}
          heading={<FormattedMessage {...scada.heading}/>}
          subheading={<FormattedMessage {...scada.subheading}/>}
          body={[
            <FormattedMessage {...scada.paragraph1}/>,
          ]}
        />
        <ImageSplit
          id="microgrid"
          reverse
          image={data.microgridImg}
          heading={<FormattedMessage {...microgrid.heading}/>}
          subheading={<FormattedMessage {...microgrid.subheading}/>}
          body={[
            <FormattedMessage {...microgrid.paragraph1}/>,
          ]}
        />
        <ImageSplit
          id="ems"
          image={data.emsImg}
          heading={<FormattedMessage {...ems.heading}/>}
          subheading={<FormattedMessage {...ems.subheading}/>}
          body={[
            <FormattedMessage {...ems.paragraph1}/>,
          ]}
        />
        <ImageSplit
          id="floodControl"
          reverse
          image={data.floodControlImg}
          heading={<FormattedMessage {...floodControl.heading}/>}
          subheading={<FormattedMessage {...floodControl.subheading}/>}
          body={[
            <FormattedMessage {...floodControl.paragraph1}/>,
          ]}
        />
      </>
    }
  />)
);

export {
  ServicesPage,
};
