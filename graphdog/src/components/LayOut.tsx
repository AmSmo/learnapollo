import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";

interface LayOutProps {
  children: any;
  variant?: "small" | "regular";
}

const LayOut: React.FC<LayOutProps> = ({ children, variant = "regular" }) => {
  return (
    <>
      <NavBar />
      <Box
        mt={8}
        mx="auto"
        maxW={variant === "regular" ? "800px" : "400px"}
        w="100%"
      >
        {children}
      </Box>
    </>
  );
};

export default LayOut;
