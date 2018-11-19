import * as React from "react";
import { HorizontalSplit } from "../HorizontalSplit";
import Img from "gatsby-image";

interface ImageSplitProps {
  reverse?: boolean;
  id?: string; 
  image?: any;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  body?: React.ReactNode[];
  before?: any;
  after?: any;
}

const ImageSplit: React.SFC<ImageSplitProps> = ({
  before, after, id, reverse, heading, subheading, body, image}) => (
  <HorizontalSplit
    id={id}
    reverse={reverse}
    left={image && <Img fluid={image.childImageSharp.fluid}/>}
    right={
      <div>
        {before && <div>{before}</div>}
        { heading &&
          <p
          >
            {heading}
          </p>
        }
        { subheading &&
          <p
          >
            {subheading}
          </p>
        }
        { body &&
          <div>
            {body.map((t, i) =>
            <p
              key={i}
            >
                {t}
              </p>,
            )}
          </div>
        }
        {after && <div>{after}</div>}
      </div>
    }
  />
);

export {
  ImageSplit,
  ImageSplitProps
};
