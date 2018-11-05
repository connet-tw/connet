import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
//import { FormattedMessage } from "react-intl";
//import { ImageSplit } from "../../sections/ImageSplit";
// import { } from "../messages";

interface Data {
  header: any;
}

const ContactPage: React.SFC<{}> = (() => (
  <StaticQuery
    query={graphql`
      query ContactPageQuery {
        header: file(relativePath: {eq: "header/microgrids.jpg"}) {
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
        <Img fluid={data.header.childImageSharp.fluid}/>
      </>
    }
  />)
);

export {
  ContactPage,
};
