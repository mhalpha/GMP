import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
  const textColor = useColorModeValue("#2B6CB0", "#63B3ED");
  const barColor = useColorModeValue("#2F855A", "#48BB78");

  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 40" // Adjusted viewBox for smaller scale
      width="120px" // Set a more typical logo width
      height="40px" // Set a more typical logo height
      {...props}
    >
      {/* Text 'GMP' */}
      <text
        x="0"
        y="28"
        fill={textColor}
        fontSize="20"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        GMP
      </text>

      {/* Histogram bars */}
      <rect x="55" y="15" width="5" height="20" fill={barColor} />
      <rect x="65" y="10" width="5" height="25" fill={barColor} />
      <rect x="75" y="5" width="5" height="30" fill={barColor} />
      <rect x="85" y="12" width="5" height="23" fill={barColor} />
      <rect x="95" y="8" width="5" height="27" fill={barColor} />
    </chakra.svg>
  );
};

export default Logo;
