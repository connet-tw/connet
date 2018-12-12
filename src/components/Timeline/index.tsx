import * as React from "react";
import { styled, css } from "src/theme";
import { Box, Flex, Card, Text } from "src/theme/primitives";
import { Container } from "../Container";

const Line = styled(Flex)`
  position: relative;
  &::before {
    content: "";
    background: ${props => props.theme.colors.grey[500]};
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    left: 0%;
    margin-left: 16px;
    transform: translateX(-50%);
    ${props => props.theme.devices[2]} {
      left: 50%;
      margin-left: 0;
    }
  }
`;

const Marker = styled(Card)`
  position: absolute;
  transform: translateX(-50%);
  top: 14px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;

const WrapperLeft = css`
  left: 0%;
  padding-right: 40px;
  padding-left: 0px;
  ${Marker} {
    left: 100%;
  }
`;

const WrapperRight = css`
  left: 50%;
  padding-left: 40px;
  padding-right: 0px;
  ${Marker} {
    left: 0;
  }
`;

const Wrapper = styled(Box)<{ i: number }>`
  ${WrapperRight}
  position: relative;
  left: 0%;
  width: 100%;
  padding: 0;
  padding-left: 38px;
  ${props => props.theme.devices[2]} {
    ${props => (props.i % 2 === 0 ? WrapperRight : WrapperLeft)};
    margin-top: ${props => (props.i === 0 ? 0 : -60)}px;
    width: 50%;
  }
`;

const arrow = css`
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  top: 22px;
  z-index: 2;
  border: medium solid white;
`;

const rightArrow = css`
  &::before {
    ${arrow}
    left: 100%;
    margin-left: 0;
    border-width: 10px 0px 10px 10px;
    border-color: transparent transparent transparent white;
`;

const leftArrow = css`
  &::before {
    ${arrow}
    left: 0%;
    margin-left: -10px;
    border-width: 10px 10px 10px 0px;
    border-color: transparent white transparent transparent;
`;

const leftCard = css`
  ${leftArrow}
`;

const rightCard = css`
  ${rightArrow}
`;

const ProjectCard = styled(Card)<{ i: number }>`
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.14));
  overflow: visible;
  position: relative;
  ${props => props.theme.devices[0]} {
    ${leftCard}
  }
  ${props => props.theme.devices[2]} {
    ${props => (props.i % 2 === 0 ? leftCard : rightCard)}
  }
`;

interface TimelineItem {
  date: React.ReactNode;
  heading: React.ReactNode;
  customer: React.ReactNode;
  location: React.ReactNode;
}

interface Props {
  heading: string;
  items: TimelineItem[];
}

const Timeline: React.SFC<Props> = ({ heading, items }) => (
  <Box bg="grey.200" width={1}>
    <Flex mx={3} my={4} flexDirection="column">
      <Text mb={2} textAlign="center" as="h2" color="text.primary">
        Project References
      </Text>
      <Container>
        <Box p={3}>
          {items.map((x, i) => (
            <Flex>
              <Line bg="grey.200" p={3} width={1}>
                <Wrapper i={i}>
                  <Marker bg="grey.300" b={4} borderColor="grey.200" />
                  <ProjectCard
                    radius={2}
                    i={i}
                    py={3}
                    px={4}
                    bg="background.paper"
                  >
                    <Text
                      mb={1}
                      fontSize={4}
                      fontWeight={2}
                      color="primary.main"
                    >
                      {x.date}
                    </Text>
                    <Text mb={2} fontSize={[2, 3, 3]} color="text.main">
                      {x.heading}
                    </Text>
                    <Text color="secondary.main">{x.customer}</Text>
                    <Text color="text.light">{x.location}</Text>
                  </ProjectCard>
                </Wrapper>
              </Line>
            </Flex>
          ))}
        </Box>
      </Container>
    </Flex>
  </Box>
);

export { Timeline, TimelineItem };
