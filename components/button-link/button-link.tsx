import { Button, ButtonProps } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";

export type ButtonLinkProps = LinkProps & ButtonProps;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Button {...props}>{children}</Button>
      </a>
    </NextLink>
  );
};
