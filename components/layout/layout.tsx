import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useRouter } from "next/router";

import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";

import { Header, HeaderProps } from "./header";
import {
  AnnouncementBanner,
  AnnouncementBannerProps,
} from "../announcement-banner";
import { Footer, FooterProps } from "./footer";

interface LayoutProps {
  children: ReactNode;
  announcementProps: AnnouncementBannerProps;
  headerProps: HeaderProps;
  footerProps: FooterProps;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, announcementProps, headerProps, footerProps } = props;
  const router = useRouter();
  const isFreeTrialPage = router.pathname === "/free-trial";

  return (
    <Box>
      {!isFreeTrialPage && <SkipNavLink>Skip to content</SkipNavLink>}
      {!isFreeTrialPage && <AnnouncementBanner {...announcementProps} />}
      {!isFreeTrialPage && <Header {...headerProps} />}
      <Box as="main">
        {!isFreeTrialPage && <SkipNavContent />}
        {children}
      </Box>
      {!isFreeTrialPage && <Footer {...footerProps} />}
    </Box>
  );
};
