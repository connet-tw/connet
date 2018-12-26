import * as React from "react";
import { styled, Box, Flex } from "primithemes";
import { Text, Heading } from "../Typography";
import { Section, SectionHeader } from "../Section";

const Container = styled(Flex)`
  max-width: 900px;
`;

interface Highlight {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

interface AboutSummaryProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  body?: React.ReactNode[];
  highlights: Highlight[];
}

const AboutSummary: React.SFC<AboutSummaryProps> = ({
  title,
  subtitle,
  body,
  highlights,
}) => {
  return (
    <Section>
      <SectionHeader title={title} subtitle={subtitle} body={body} />
      {!!highlights && (
        <Container flexWrap="wrap" w={1} p={3}>
          {highlights.map((h, i) => (
            <Flex
              p={3}
              w={[1, 1 / 2, 1 / 4]}
              key={i}
              alignItems="center"
              flexDirection="column"
            >
              <Box w={1}>
                <Heading
                  color="primary.main"
                  mb={2}
                  textAlign="center"
                  is="h5"
                  fontSize={[5, 6]}
                  fontWeight={2}
                >
                  {h.title}
                </Heading>
                <Text
                  textTransform="uppercase"
                  color="text.main"
                  fontSize={1}
                  is="p"
                  textAlign="center"
                >
                  {h.subtitle}
                </Text>
              </Box>
            </Flex>
          ))}
        </Container>
      )}
    </Section>
  );
};

export { AboutSummary, AboutSummaryProps, Highlight };
