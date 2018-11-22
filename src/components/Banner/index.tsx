import * as React from "react";
import { Box, Flex, Text } from "src/theme/primitives";
import { Image } from "../Image";
import { styled } from "src/theme";

const Wrapper = styled(Flex)`
  position: relative;
  overflow: hidden;
  min-height: 300px;
  align-items: flex-end;
`;

const ImageWrapper = styled(Box)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Img = styled(Image)`
  height: 100%;
  width: 100%;
`;

const Content = styled(Flex)`
  z-index: 2;
  position: relative;
  border-color: ${props => props.theme.colors.primary.main};
  &::after {
    z-index: -1;
    position: absolute;
    border-top: ${props => props.theme.borders[1]};
    border-color: ${props => props.theme.colors.white.light};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(to top,
      rgba(255,255,255,1),
      rgba(255,255,255,0.95) 30%,
      rgba(255,255,255,0.56));
  }
`;

interface BannerProps {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  image: any;
}

const Banner: React.SFC<BannerProps> = (props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Img fluid={props.image}/>
      </ImageWrapper>
      <Content
        width={1}
        px={3}
        py={4}
        mt={4}
        flexDirection="column"
        alignItems="center"
      >
        <Text
          as="h1"
          fontSize={5}
          color="primary.main"
          fontWeight={2}
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="tracked"
          lineHeight="title"
        >
          {props.heading}
        </Text>
        {props.subheading &&
          <Text mt={2} fontSize={3} color="text.main">
            {props.subheading}
          </Text>
        }
      </Content>
    </Wrapper>
  );
};

export {
  Banner,
  BannerProps
};
