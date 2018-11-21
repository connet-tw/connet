import * as React from "react";
import GatsbyImage from "gatsby-image";

interface ImgProps {
  fixed?: any;
  fluid?: any;
  className?: string;
}

const Image: React.SFC<ImgProps> = ({fixed, fluid, className}, ...props) => {
  return <GatsbyImage
    fluid={fluid && fluid.childImageSharp.fluid}
    fixed={fixed && fixed.childImageSharp.fixed}
    className={className}
    {...props}
    />
}

export {
  Image
}
