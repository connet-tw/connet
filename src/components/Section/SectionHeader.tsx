import * as React from "react";
import { Flex, Text } from "themed-primitives";

interface Props {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  body?: React.ReactNode[];
}

export const SectionHeader: React.SFC<Props> = ({
  children,
  heading,
  subheading,
  body,
}) => (
  <Flex mt={4} m={3} flexDirection="column" style={{ maxWidth: 600 }}>
    <Text
      textAlign="center"
      as="h2"
      fontWeight={2}
      fontSize={[5, 5, 6]}
      color="text.dark"
    >
      {heading}
    </Text>
    {!!subheading && (
      <Text
        mt={3}
        fontWeight={3}
        fontSize={3}
        color="primary.main"
        textAlign="center"
      >
        {subheading}
      </Text>
    )}
    {!!body &&
      body.map((x, i) => (
        <Text
          mt={3}
          color="text.dark"
          textAlign="center"
          lineHeight={"copy"}
          key={i}
        >
          {x}
        </Text>
      ))}
  </Flex>
);
