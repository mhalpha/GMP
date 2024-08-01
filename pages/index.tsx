import * as React from "react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiUsers,
  FiAward,
  FiMessageCircle,
  FiBarChart2,
  FiVideo,
  FiTrendingUp,
  FiBookOpen,
  FiPlay,
  FiBell,
  FiTrendingDown,
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

// Define motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 }, // Increase the movement
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Slightly slower duration for better visibility
      ease: "easeOut",
    },
  },
};

const Home: NextPage = () => {
  return (
    <Box>
      <SEO title="Gray Matter Profits" description="Best trading community" />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Hero
              id="home"
              justifyContent="flex-start"
              px="0"
              title={
                <FallInPlace>
                  Master Futures Trading
                  <Br /> with the Gray Matter Profits
                </FallInPlace>
              }
              description={
                <FallInPlace delay={0.4} fontWeight="medium">
                  Join a thriving <Em>close knit community of traders</Em>, gain
                  <Br />
                  real-world insights, and learn the right way to trade
                  <Br /> futures indices with live classes and expert guidance.
                </FallInPlace>
              }
            >
              <FallInPlace delay={0.8}>
                <HStack pt="4" pb="12" spacing="8"></HStack>

                <ButtonGroup spacing={4} alignItems="center">
                  <ButtonLink
                    colorScheme="primary"
                    size="lg"
                    href="https://whop.com/gray-matter-profits/?d2c=true&directPlanId=plan_LrPXO90yDMoPi&pass=prod_4LGcalbAJ5MTW&a=user5c1a1836007"
                  >
                    Start Free Trial
                  </ButtonLink>
                </ButtonGroup>
              </FallInPlace>
            </Hero>
          </motion.div>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/discorddm.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
        <Features
          id="benefits"
          columns={[1, 2, 4]}
          iconSize={4}
          innerWidth="container.xl"
          pt="20"
          features={[
            {
              title: "Supportive Community",
              icon: FiUsers,
              description:
                "Our community thrives on mutual growth, with experienced traders ready to guide and support you at every step.",
              iconPosition: "left",
              delay: 0.6,
            },
            {
              title: "Expert Mentorship",
              icon: FiAward,
              description:
                "Learn directly from seasoned professionals who have mastered the art of futures trading.",
              iconPosition: "left",
              delay: 0.8,
            },
            {
              title: "Interactive Learning",
              icon: FiMessageCircle,
              description:
                "Engage in live classes and discussions, where real trades are analyzed, and questions are answered in real-time.",
              iconPosition: "left",
              delay: 1,
            },
            {
              title: "Real-World Application",
              icon: FiBarChart2,
              description:
                "Our focus is on practical, actionable strategies that you can apply directly in your trading journey.",
              iconPosition: "left",
              delay: 1.1,
            },
          ]}
          reveal={FallInPlace}
        />
      </motion.div>
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
      <Highlights>
        <HighlightsItem
          colSpan={[1, null, 2]}
          title="Comprehensive Learning Resources"
        >
          <VStack alignItems="flex-start" spacing="8">
            <Text color="muted" fontSize="xl">
              Dive into a wealth of resources designed to accelerate your
              trading skills.
              <Em>From beginner tutorials to advanced strategies</Em>, we cover
              it all. Benefit from live classes, recorded sessions, and curated
              materials to guide your trading journey.
            </Text>
          </VStack>
        </HighlightsItem>
        <HighlightsItem title="Proven Trading Strategies">
          <Text color="muted" fontSize="lg">
            Why start from scratch when you can learn from the best? Our mentors
            and community leverage time-tested strategies and tools to help you
            navigate the complexities of futures trading with confidence.
          </Text>
        </HighlightsItem>
        <HighlightsTestimonialItem
          name="GMP Teddy"
          description="Founder"
          avatar="/static/images/avatar.jpg"
          gradient={["pink.200", "purple.500"]}
        >
          “At GMP, we&apos;re more than just a community—we&apos;re a family of
          traders committed to mastering futures indices together. With expert
          guidance, live classes, and a supportive environment, we&apos;re here
          to help you succeed in your trading journey.”
        </HighlightsTestimonialItem>
        <HighlightsItem
          colSpan={[1, null, 2]}
          title="Start Your Trading Journey Two Steps Ahead"
        >
          <Text color="muted" fontSize="lg">
            We&apos;ve set up everything you need to start trading smarter and
            faster. Focus on mastering the markets while we provide the tools
            and support you need to succeed.
          </Text>
          <Wrap mt="8">
            {[
              "strategies",
              "voice-calls",
              "video-calls",
              "chat",
              "feedback",
              "QnA",
              "performance reviews",
              "trade breakdowns",
            ].map((value) => (
              <Tag
                key={value}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                {value}
              </Tag>
            ))}
          </Wrap>
        </HighlightsItem>
      </Highlights>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
      <Features
        id="features"
        title={
          <Heading
            lineHeight="short"
            fontSize={["2xl", null, "4xl"]}
            textAlign="left"
            as="p"
          >
            Empower Your Trading Journey
          </Heading>
        }
        description={
          <>
            At GMP, we&apos;ve curated everything you need to succeed in futures
            trading.
            <Br />
            From comprehensive resources to advanced tools, our platform is
            designed to elevate your trading experience.
          </>
        }
        align="left"
        columns={[1, 2, 3]}
        iconSize={4}
        features={[
          {
            title: "Community.",
            icon: FiUsers,
            description:
              "Join a thriving network of traders and mentors, where collaboration and growth are at the heart of everything we do.",
            variant: "inline",
          },
          {
            title: "Live Classes.",
            icon: FiVideo,
            description:
              "Engage in real-time learning sessions where experienced traders break down their strategies and answer your questions.",
            variant: "inline",
          },
          {
            title: "Trade Analysis.",
            icon: FiBarChart2,
            description:
              "Access in-depth analysis of trades, helping you understand market movements and refine your strategies.",
            variant: "inline",
          },
          {
            title: "Mentorship.",
            icon: FiAward,
            description:
              "Learn from the best with one-on-one mentoring sessions tailored to your trading goals.",
            variant: "inline",
          },
          {
            title: "Performance Tracking.",
            icon: FiTrendingUp,
            description:
              "Log and monitor your trades with detailed performance metrics, helping you stay on top of your progress.",
            variant: "inline",
          },
          {
            title: "Resource Library.",
            icon: FiBookOpen,
            description:
              "Dive into a comprehensive collection of guides, tutorials, and recorded sessions to enhance your trading skills.",
            variant: "inline",
          },
          {
            title: "Onboarding.",
            icon: FiPlay,
            description:
              "Seamlessly integrate into the community with guided onboarding that sets you up for success from day one.",
            variant: "inline",
          },
          {
            title: "Custom Alerts.",
            icon: FiBell,
            description:
              "Stay informed with customizable alerts for market movements and trading opportunities.",
            variant: "inline",
          },
          {
            title: "Market Insights.",
            icon: FiTrendingDown,
            description:
              "Get daily updates and insights from experts to stay ahead of the curve.",
            variant: "inline",
          },
        ]}
      />
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
      <Testimonials
        title={testimonials.title}
        columns={[1, 2, 3]}
        innerWidth="container.xl"
      >
        <>
          {columns.map((column, i) => (
            <Stack key={i} spacing="8">
              {column.map((t, i) => (
                <Testimonial key={i} {...t} />
              ))}
            </Stack>
          ))}
        </>
      </Testimonials>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
      <Pricing {...pricing}>
        <Text p="8" textAlign="center" color="muted">
          VAT may be applicable depending on your location.
        </Text>
      </Pricing>
    </motion.div>
  );
};

const FaqSection = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
      <Faq {...faq} />
    </motion.div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Boost your confidence. Join GMP 🚀 ",
        description: "Get Started",
        href: "https://whop.com/gray-matter-profits/?d2c=true&directPlanId=plan_LrPXO90yDMoPi&pass=prod_4LGcalbAJ5MTW&a=user5c1a1836007",
        action: false,
      },
    },
  };
}
