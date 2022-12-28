import { Box, Flex, Heading, Link, Spacer, HStack } from "@chakra-ui/react";

// const animation = keyframes`{
//     from {
//         background: inherit
//     }
//     to  { background: lightblue }
// }`;

export const Navbar = () => {
  //   const listAnimate = `${animation} 1s ease-in-out infinite`;
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        mb="1em"
        color={"solid black"}
        // boxShadow="0px 10px 61px -20px rgba(31,255,98,1)"
        boxShadow="dark-lg"
        // borderBottom={"1px solid green"}
        p="6"
        bg="black"
      >
        <Heading
          fontFamily="cursive"
          fontSize={{ base: "22px", md: "38px", lg: "48px" }}
          textShadow="1px 1px #ff0000"
          _hover={{ color: "teal.600" }}
        >
          🗒️ Docs Manager
        </Heading>
        <Spacer />
        <Box>
          <HStack spacing="1em" mr="1em">
            <Link href="#" fontSize="xl" _hover={{ color: "teal.600" }}>
              Home
            </Link>
            <Link href="#" fontSize="xl" _hover={{ color: "teal.600" }}>
              About
            </Link>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};