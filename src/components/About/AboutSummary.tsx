import * as React from "react";
import { Box, Flex, Text } from "src/theme/primitives";
import { Section, SectionHeader } from "../Section";
import { styled } from "src/theme";

const Container = styled(Flex)`
  max-width: 900px;
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
    <Section
    >
      <SectionHeader
        heading={heading}
        subheading={subheading}
        body={body}
      />
      {!!highlights &&
        <Container flexWrap="wrap" width={1} p={3}>
          {highlights.map((h, i) =>
            <Flex p={3} width={[1, 1/2, 1/4]} key={i} alignItems="center" flexDirection="column">
              <Box width={1}>
                <Text
                  color="primary.main"
                  mb={2}
                  textAlign="center"
                  as="h5"
                  fontSize={[5,6]} fontWeight={2}
                >
                  {h.heading}
                </Text>
                <Text textTransform="uppercase" color="text.main" fontSize={1} as="p" textAlign="center">
                  {h.subheading}
                </Text>
              </Box>
            </Flex>
          )}
        </Container>
      }
    </Section>
  );
}

export {
  AboutSummary,
  AboutSummaryProps,
  Highlight,
};
