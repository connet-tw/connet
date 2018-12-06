import * as React from "react";
import { Box, Flex, Card } from "src/theme/primitives";
import { styled } from "src/theme";
import { Image } from "../Image";

const Wrapper = styled(Card)`
  position: relative;
  overflow: hidden;
  min-height: 300px;
`;

const ImageWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

interface BannerProps {
  image: any;
}

const BannerWrapper: React.SFC<BannerProps> = ({ image, children }) => {
  return (
    <Wrapper justifyContent="flex-end">
      <ImageWrapper>
        <Image style={{width: "100%"}} fluid={image}/>
      </ImageWrapper>
      <Flex
        color="white.light"
        style={{position: "relative"}}
        width={1}
      >
      <Overlay
        bt={1}
        borderColor="white.light"
        bg="linear-gradient(to top, rgba(255,255,255,1.0), rgba(255,255,255,0.75))"
        opacity={0.95}
      />
        <Box width={1} style={{zIndex: 1}}>
          {children}
        </Box>
      </Flex>
    </Wrapper>
  );
};

export {
  BannerWrapper,
  BannerProps
};
