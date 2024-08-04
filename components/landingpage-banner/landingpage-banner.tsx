import * as React from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Button,
  keyframes,
} from "@chakra-ui/react";
import {
  Banner,
  BannerActions,
  BannerDescription,
  BannerTitle,
} from "@saas-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { FallInPlace } from "../motion/fall-in-place";

export interface LandingPageBannerProps {
  title: string;

  action?: string;
}

export const LandingPageBanner: React.FC<LandingPageBannerProps> = (props) => {
  const { title, action } = props;
  if (!title) {
    return null;
  }

  // Define the keyframes for the gradient animation
  const animateGradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `;

  return (
    <Flex position="relative" zIndex="10" top="0" width="100%">
      <Container maxW="container.xl" px="8">
        <FallInPlace delay={1.4} translateY="-100px">
          <Banner
            display="flex"
            bg="white"
            fontSize="sm"
            justifyContent="center"
            colorScheme="purple"
            backgroundClip="padding-box"
            borderRadius="full"
            maxW="container.md"
            margin="0 auto"
            borderColor="transparent"
            position="relative"
            py="4px"
            px="3"
            overflow="visible"
            cursor="pointer"
            transition="all .2s ease-out"
            _dark={{ bg: "gray.900", borderColor: "transparent" }}
            _before={{
              content: `""`,
              position: "absolute",
              zIndex: -1,
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              borderRadius: "inherit",
              margin: "-2px",
              bgGradient: "linear(to-r, #ff7e5f, #feb47b, #86a8e7, #91eae4)", // Brighter gradient colors
              backgroundSize: "200% 200%",
              animation: `${animateGradient} 3s linear infinite`,
              transition: "background .2s ease-out",
              _dark: {
                bgGradient: "linear(to-r, #ff7e5f, #feb47b, #86a8e7, #91eae4)", // Brighter gradient colors for dark mode
              },
            }}
            _hover={{
              "& .chakra-icon": {
                transform: "translate(0)",
              },
              boxShadow: "md",
            }}
          >
            <HStack zIndex="2">
              <BannerTitle fontWeight="semibold" noOfLines={1}>
                {title}
              </BannerTitle>

              {action && (
                <BannerActions>
                  <Button
                    size="xs"
                    variant="link"
                    color="muted"
                    _hover={{
                      textDecoration: "none",
                    }}
                    rightIcon={
                      <Icon
                        as={FiArrowRight}
                        transform="translate(-5px)"
                        transitionProperty="common"
                        transitionDuration="normal"
                      />
                    }
                  >
                    Read more
                  </Button>
                </BannerActions>
              )}
            </HStack>
          </Banner>
        </FallInPlace>
      </Container>
    </Flex>
  );
};

export default LandingPageBanner;
