import * as React from "react";
import { Link } from "../../i18n";
import { Image } from "../Image";
import { Section, SectionHeader } from "../Section";
import { Button } from "../Button";
import { Box, Card, Flex, Text } from "src/theme/primitives";

interface CategoryLink {
  label: React.ReactNode;
  text?: React.ReactNode;
  buttonText: React.ReactNode;
  image: any;
  to: string;
}

type Props = {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  body?: React.ReactNode[];
  categoryLinks: CategoryLink[];
  image?: any;
  gradient?: string;
};

const Categories: React.SFC<Props> = ({ image, gradient, heading, subheading, body, categoryLinks }) => (
  <Section>
    <SectionHeader
      heading={heading}
      subheading={subheading}
      body={body}
    />
    <Flex p={2} flexWrap="wrap">
      {categoryLinks.map((x) =>
        <Flex width={[1, 1/2, 1/4]} p={2}>
          <Card
            radius={2}
            width={1}
            key={x.to}
            shadow={1}
            flexDirection="column"
          >
            <Flex flexDirection="column">
              <Image style={{height: 140}} fluid={x.image}/>
              <Box m={3}>
                <Text as="h3" color="primary.main" fontSize={3}>
                  {x.label}
                </Text>
                {x.text &&
                  <Text mt={2} as="p">
                    {x.text}
                  </Text>
                }
              </Box>
              <Flex m={3}>
                <Button as={Link} to={x.to} outlined>
                  {x.buttonText}
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Flex>,
      )}
    </Flex>
  </Section>
);

export {
  Categories
};
