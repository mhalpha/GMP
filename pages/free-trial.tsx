import * as React from "react";
import type { NextPage } from "next";
import {
  Container,
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import { Testimonial, Testimonials } from "components/testimonials";
import { LandingPageBanner } from "components/landingpage-banner"; // Import the AnnouncementBanner component
import testimonials from "data/testimonials";
import { HighlightsTestimonialItem } from "components/highlights"; // Import the HighlightsTestimonialItem component

const LandingPage: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Claim Your Free Trial | Gray Matter Profits"
        description="Get started with a free trial of Gray Matter Profits."
      />

      {/* Announcement Banner */}
      <Box mt={5}>
        <LandingPageBanner title="Profitable Trading Awaits!" />
      </Box>

      <Container maxW="container.md" pt={10} pb={0}>
        <VStack spacing={8} align="center">
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }} // Adjust font size according to screen size
            textAlign="center"
            fontWeight="bold" // Match the font weight
            lineHeight="shorter" // Adjust line height to match hero title
            bgGradient="linear(to-r, silver, #8952e0)" // Gradient background
            bgClip="text" // Apply the gradient to the text
          >
            Gray Matter Profits Mentorship
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} // Dynamic font size for this heading
            textAlign="center"
            fontWeight="semibold"
          >
            Learn how our simple strategies could double or triple your trading
            win rate while using other people&apos;s money.
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            textAlign="center"
          >
            Even if you bought countless courses.
            <br />
            Even if you&apos;ve unsuccessfully copied live traders&apos; trades.
            <br />
            Even if you&apos;ve failed at using overpriced alert services.
            <br />
            Even if you&apos;ve lost countless trading accounts.
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            textAlign="center"
            fontWeight="bold"
          >
            Claim your free trial now!
          </Text>
          <Box as="form" w="full" maxW="sm" mx="auto" onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Input placeholder="Full Name" name="name" required />
              <Input
                placeholder="Email Address"
                type="email"
                name="email"
                required
              />
              <Button type="submit" colorScheme="primary" size="lg" w="full">
                CLAIM YOUR FREE TRIAL SPOT
              </Button>
            </Stack>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign="center"
              mt={4}
              color="red.500"
              fontWeight="bold"
            >
              ONLY A FEW SPOTS LEFT!
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              textAlign="center"
              mt={2}
            >
              100% Secure - Privacy Guaranteed
            </Text>
          </Box>
        </VStack>
      </Container>

      <Container maxW="container.xl" pt={0}>
        {/* Highlights Testimonial Item */}
        <Testimonials
          title={testimonials.title}
          columns={[1, 2, 3]}
          innerWidth="container.xl"
        >
          <>
            {testimonials.items.map((t, i) => (
              <Stack key={i} spacing="8">
                <Testimonial key={i} {...t} />
              </Stack>
            ))}
          </>
        </Testimonials>

        <Box py={10}>
          <HighlightsTestimonialItem
            name="GMP Teddy"
            description="Founder"
            avatar="/static/images/avatar.jpg"
            gradient={["pink.200", "purple.500"]}
          >
            &quot;At GMP, we&apos;re more than just a community—we&apos;re a
            family of traders committed to mastering futures indices together.
            With expert guidance, live classes, and a supportive environment,
            we&apos;re here to help you succeed in your trading journey.&quot;
          </HighlightsTestimonialItem>
        </Box>
      </Container>
    </Box>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    console.log("Form data:", data);
    // Add form submission logic here
  }
};

export default LandingPage;
