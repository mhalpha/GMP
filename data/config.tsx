import { Button } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Gray Matter Profits",
    description: "The number 1 Trading community",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },
    ],
  },
  footer: {
    links: [
      {
        href: "mailto:teddy@gmp.co",
        label: "Contact",
      },
      {
        href: "https://x.com/i/flow/login?redirect_after_login=%2FGMProfits",
        label: <FaTwitter size="14" />,
      },
    ],
  },
  signup: {
    title: "Start building with Saas UI",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow WAI-ARIA standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with theme support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate and fully typed, build your product at speed.",
      },
    ],
  },
};

export default siteConfig;
