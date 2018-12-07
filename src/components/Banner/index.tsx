import * as React from "react";
import { Box, Text } from "src/theme/primitives";
import { BannerWrapper } from "./BannerWrapper";

interface BannerProps {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  image: any;
}

const Banner: React.SFC<BannerProps> = (props) => {
  return (
    <BannerWrapper image={props.image}>
      <Box p={4}>
        <Text
          as="h1"
          fontSize={[5,6,6,7]}
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
          <Text
            mt={2}
            fontSize={3}
            textAlign="center"
            color="text.main"
          >
            {props.subheading}
          </Text>
        }
      </Box>
    </BannerWrapper>
  );
};

export {
  Banner,
  BannerProps
};
