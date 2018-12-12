import * as React from "react";
import { styled, css } from "src/theme";
import { Box, Flex, Card, Text } from "src/theme/primitives";
import { data } from "./References";

const Line = styled(Flex)`
  position: relative;
  &::before {
    content: "";
    background: ${props => props.theme.colors.grey[400]};
    height: 100%;
    width: 2px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Marker = styled(Card)`
  position: absolute;
  top: 14px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;

const WrapperLeft = css`
  left: 0%;
  padding-right: 40px;
  ${Marker} {
    right: 0;
    transform: translateX(50%);
  }
`;

const WrapperRight = css`
  left: 50%;
  padding-left: 40px;
  ${Marker} {
    transform: translateX(-50%);
    left: 0;
  }
`;

const Wrapper = styled(Box)<{ i: number }>`
  width: 50%;
  position: relative;
  padding: 0;
  margin-top: ${props => (props.i === 0 ? 0 : -40)}px;
  ${props => (props.i % 2 === 0 ? WrapperRight : WrapperLeft)};
`;

const arrow = css`
  &::before {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: 22px;
    z-index: 2;
    border: medium solid white;
  }
`;

const rightArrow = css`
  ${arrow}
  &::before {
    right: -10px;
    border-width: 10px 0px 10px 10px;
    border-color: transparent transparent transparent white;
`;

const leftArrow = css`
  ${arrow}
  &::before {
    left: -10px;
    border-width: 10px 10px 10px 0px;
    border-color: transparent white transparent transparent;
`;

const leftCard = css`
  ${leftArrow}
`;

const rightCard = css`
  ${rightArrow}
`;

const ProjectCard = styled(Box)<{ i: number }>`
  position: relative;
  ${props => (props.i % 2 === 0 ? leftCard : rightCard)}
`;

export const Timeline: React.SFC<{}> = () => (
  <Box bg="grey.200" width={1}>
    <Flex p={3} flexDirection="column">
      <Text>Timeline</Text>
      <Box p={3}>
        {data.map((x, i) => (
          <Flex>
            <Line bg="grey.200" p={3} width={1}>
              <Wrapper i={i}>
                <Marker bg="primary.main" b={4} borderColor="grey.200" />
                <ProjectCard i={i} p={3} bg="background.paper">
                  <Text fontSize={4}>{x.date}</Text>
                  <Text>{x.project}</Text>
                  <Text>{x.customer}</Text>
                </ProjectCard>
              </Wrapper>
            </Line>
          </Flex>
        ))}
      </Box>
    </Flex>
  </Box>
);
