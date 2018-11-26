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
    <Card
      bg="background.paper"
      width={1}
      bt={2} btc="primary.main"
      alignItems="center" flexDirection="column"
    >
      <Header
        mt={4}
        m={3}
        flexDirection="column"
      >
        <Text
          textAlign="center"
          as="h2"
          fontWeight={2} fontSize={6}
          color="text.dark"
        >
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
        <Flex flexWrap="wrap" width={1} p={3}>
          {highlights.map((h, i) =>
            <Flex p={3} width={[1, 1/2, 1/4]} key={i} alignItems="center" flexDirection="column">
              <Box width={1}>
                <Text
                  color="primary.main"
                  mb={2}
                  textAlign="center"
                  as="h5"
                  fontSize={5} fontWeight={2}
                >
                  {h.heading}
                </Text>
                <Text color="text.main" as="p" textAlign="center">
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
