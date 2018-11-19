import * as React from "react";
import { styled } from "src/theme";
import GatsbyImage from "gatsby-image";

const Img = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

interface FluidImgProps {
  image: any;
}
const FluidImg: React.SFC<FluidImgProps> = ({image}) => {
  return <Img fluid={image.childImageSharp.fluid}/>
}

interface FixedImgProps {
  image: any;
}

const FixedImg: React.SFC<FixedImgProps> = ({image}) => {
  return <Img fixed={image.childImageSharp.fixed}/>
}

export {
  FixedImg,
  FluidImg
}
