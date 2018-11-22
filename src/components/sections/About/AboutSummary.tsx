import * as React from "react";
import { Box, Card, Flex, Text } from "src/theme/primitives";
import { styled } from "src/theme";

const Header = styled(Flex)`
  max-width: 800px;
`

interface Highlight {
  heading: React.ReactNode;
  subheading: React.ReactNode;
}

interface AboutSummaryProps {
  heading: React.ReactNode; 
  subheading?: React.ReactNode; 
  body?: React.ReactNode[];
  highlights: Highlight[];
}

const AboutSummary: React.SFC<AboutSummaryProps> = ({
  heading, subheading, body, highlights
}) => {
  return (
    <Card bt={2} btc="primary.main" alignItems="center" bg="background.paper" flexDirection="column" width={1}>
      <Header p={3} flexDirection="column">
        <Text textAlign="center" as="h2" fontWeight={2} fontSize={5} color="text.dark">
          {heading}
        </Text>
        {!!subheading &&
          <Text mt={3} textAlign="center">
            {subheading}
          </Text>
        }
        {!!body && body.map((x, i) =>
          <Text mt={2} color="text.dark" textAlign="center" lineHeight={"copy"} key={i}>
            {x}
          </Text>
        )}
      </Header>
      {!!highlights &&
        <Flex flexWrap="wrap" spacing={4}>
          {highlights.map((h, i) =>
            <Flex width={[1, 1/4]} key={i} alignItems="center" flexDirection="column">
              <Box bg="red">
                <Text as="h5" fontSize={4} fontWeight={3}>
                  {h.heading}
                </Text>
                <Text as="p">
                  {h.subheading}
                </Text>
              </Box>
            </Flex>
          )}
        </Flex>
      }
    </Card>
  );
}

export {
  AboutSummary,
  AboutSummaryProps,
  Highlight,
};
