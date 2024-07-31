import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Pricing for GMP",
  description:
    "Choose the plan that best suits your trading goals and get access to expert guidance and a supportive community.",
  plans: [
    {
      id: "weekly",
      title: "Weekly Access",
      description:
        "Ideal for those looking to try out our community and resources with minimal commitment.",
      price: "$22.99/week",
      features: [
        {
          title: "3 Day Free Trial",
        },
        {
          title: "Access to Live Classes",
        },
        {
          title: "Community Support",
        },
        {
          title: "Trade Analysis",
        },
        {
          title: "Mentorship Sessions",
        },
        {
          title: "Performance Tracking",
        },
        {
          title: "Resource Library",
        },
      ],
      action: {
        href: "https://whop.com/gray-matter-profits/?d2c=true&directPlanId=plan_FJZSd4IKR7Qve&pass=prod_0jpHR0JFpTyqA&a=user5c1a1836007",
        target: "_blank",
      },
    },
    {
      id: "monthly",
      title: "Monthly Access",
      description:
        "Best for traders who want a bit more time to explore our offerings and see real results.",
      price: "$89.99/month",
      isRecommended: true,
      features: [
        {
          title: "7 Day Free Trial",
        },
        {
          title: "10% OFF Regular Price",
        },
        {
          title: "All Weekly Features",
        },
        {
          title: "Custom Alerts",
        },
        {
          title: "Market Insights",
        },
        {
          title: "Responsive Design",
        },
        {
          title: "Exclusive Content",
        },
      ],
      action: {
        href: "https://whop.com/gray-matter-profits/?d2c=true&directPlanId=plan_LrPXO90yDMoPi&pass=prod_4LGcalbAJ5MTW&a=user5c1a1836007",
        target: "_blank",
      },
    },
    {
      id: "semiannual",
      title: "6-Month Access",
      description:
        "For serious traders committed to improving their skills over a longer period.",
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            $599
          </Text>
          <Text>$499/6 months</Text>
        </HStack>
      ),
      features: [
        {
          title: "15% OFF Regular Price",
        },
        {
          title: "All Monthly Features",
        },
        {
          title: "Priority Mentorship",
        },
        {
          title: "Early Access to New Features",
        },
        {
          title: "Dedicated Support",
        },
      ],
      action: {
        href: "https://whop.com/gray-matter-profits/?d2c=true&directPlanId=plan_XhaIuIbX1SBXc&pass=prod_5ZoQTp3QxKXNO&a=user5c1a1836007",
        target: "_blank",
      },
    },
    {
      id: "annual",
      title: "Annual Access",
      description:
        "Get the most value with our yearly plan, perfect for traders looking for long-term success.",
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            $1199
          </Text>
          <Text>$899/year</Text>
        </HStack>
      ),
      features: [
        {
          title: "25% OFF Regular Price",
        },
        {
          title: "All Semiannual Features",
        },
        {
          title: "Exclusive Webinars",
        },
        {
          title: "VIP Community Access",
        },
        {
          title: "Free Event Passes",
        },
      ],
      action: {
        href: "https://whop.com/gray-matter-profits/?d2c=true&directPlanId=plan_BxRJUgeyrY5LK&pass=prod_gZHEdtVcExpha&a=user5c1a1836007",
        target: "_blank",
      },
    },
    {
      id: "lifetime",
      title: "Lifetime Membership",
      description:
        "One-time payment for lifetime access to all our resources, updates, and community features.",
      price: "$1299 for Lifetime",
      features: [
        {
          title: "One-Time Payment",
        },
        {
          title: "Lifetime Access",
        },
        {
          title: "All Annual Features",
        },
        {
          title: "Lifetime Updates",
        },
        {
          title: "Exclusive Lifetime Member Perks",
        },
      ],
      action: {
        href: "https://whop.com/gray-matter-profits/?d2c=true&directPlanId=plan_EF1Ru58qJiX9c&pass=prod_RtaGwHmaK0TnO&a=user5c1a1836007",
        target: "_blank",
      },
    },
  ],
};
