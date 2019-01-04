import * as React from "react";
import GatsbyImage, { GatsbyImageProps } from "gatsby-image";

interface ImgProps extends GatsbyImageProps {
  fixed?: any;
  fluid?: any;
  className?: string;
}

const Image: React.SFC<ImgProps> = (
  { fixed, fluid, className, style },
  ...props
) => {
  return (
    <GatsbyImage
      style={style}
      fluid={fluid && fluid.childImageSharp.fluid}
      fixed={fixed && fixed.childImageSharp.fixed}
      className={className}
      {...props}
    />
  );
};

export { Image };
