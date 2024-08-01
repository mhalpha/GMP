import { chakra, useColorModeValue } from "@chakra-ui/react";

export const Logo: React.FC<React.ComponentPropsWithoutRef<"img">> = (
  props
) => {
  const logoSrc = useColorModeValue(
    "/static/images/logo-dark.png",
    "/static/images/logo-light.png"
  );

  return (
    <chakra.img
      src={logoSrc}
      alt="GMP Logo"
      width="90px" // Adjust to your desired width
      height="50px" // Adjust to your desired height
      {...props} // Forward all other props, including onClick
    />
  );
};

export default Logo;
