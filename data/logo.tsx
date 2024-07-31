import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
  const primaryColor = useColorModeValue("#2B6CB0", "#63B3ED");
  const secondaryColor = useColorModeValue("#2F855A", "#48BB78");

  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      {...props}
    >
      {/* G Shape */}
      <path
        d="M20,10 C12.28,10 6,16.28 6,24 C6,31.72 12.28,38 20,38 L40,38"
        fill="none"
        stroke={primaryColor}
        strokeWidth="10"
      />

      {/* M Shape */}
      <path
        d="M60,38 L60,10 L70,28 L80,10 L80,38"
        fill="none"
        stroke={primaryColor}
        strokeWidth="10"
      />

      {/* P Shape */}
      <path
        d="M100,10 L100,38"
        fill="none"
        stroke={primaryColor}
        strokeWidth="10"
      />
      <circle
        cx="110"
        cy="20"
        r="10"
        fill="none"
        stroke={primaryColor}
        strokeWidth="10"
      />

      {/* Chart Arrow */}
      <path
        d="M140,35 L150,25 L160,40 L170,20 L180,35"
        fill="none"
        stroke={secondaryColor}
        strokeWidth="6"
      />
      <polygon points="180,35 190,30 180,40" fill={secondaryColor} />

      {/* Text 'GMP' next to logo */}
      <text
        x="200"
        y="40"
        fill={primaryColor}
        fontSize="30"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        GMP
      </text>
    </chakra.svg>
  );
};

export default Logo;
