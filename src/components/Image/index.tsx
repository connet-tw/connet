import * as React from "react";
import { styled } from "src/theme";
import GatsbyImage from "gatsby-image";

const Img = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

interface ImgProps {
  image: any;
  className?: string;
}

const FluidImg: React.SFC<ImgProps> = ({image, className}, ...props) => {
  return <Img fluid={image.childImageSharp.fluid} className={className} {...props}/>
}

const FixedImg: React.SFC<ImgProps> = ({image, className}, ...props) => {
  return <Img fixed={image.childImageSharp.fixed} className={className} {...props}/>
}

export {
  FixedImg,
  FluidImg
}
