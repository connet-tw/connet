import * as React from "react";
import { FormattedMessage } from "react-intl";
import { app, contact } from "./Layout.messages";
import { Box, Text, Flex } from "src/theme/primitives";
import { styled } from "src/theme";

const Main = styled(Box)`
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${require("../../images/patterns/cairo-pentagon-32.png")});
    background-repeat: repeat;
    opacity: 0.05;
  }
`;

const MainInner = styled(Flex)`
  ${props => props.theme.devices[2]} {
    flex-direction: row;
  }
`;

interface Props {
  logo?: any;
};

const Footer: React.SFC<Props> = ({ logo }) => (
  <Box as="footer">
    <Main bg="primary.dark" color="white.light">
      <MainInner spacing={3} justifyContent="center" alignItems="center" flexDirection="column">
        {logo &&
          <Flex style={{opacity: 0.9}} width={["220px"]}>
            <img style={{width: "100%", height: "100%"}} src={logo.childImageSharp.fixed.src}/>
          </Flex>
        }
        <Flex justifyContent="center" flexDirection="column">
          <Text pb={1} fontSize={3} fontWeight={5}>
            <FormattedMessage id="app.title"/>
          </Text>
          <Text fontSize={2} textAlign="center">
            <FormattedMessage {...contact.phoneNumber}/>
          </Text>
          <Text fontSize={2} textAlign="center">
            <FormattedMessage {...contact.emailAddress}/>
          </Text>
        </Flex>
      </MainInner>
    </Main>
    <Flex bg="text.dark" p={2} justifyContent="center">
      <Text color="grey.600">
        © 2018 Copyright: <Text as="span" color="primary.contrast">
          <FormattedMessage {...app.title}/>
        </Text>
      </Text>
    </Flex>
  </Box>
);

export { Footer };
