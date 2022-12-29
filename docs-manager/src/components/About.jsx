import React from 'react'
import { Box, Text , Divider, Flex} from '@chakra-ui/react'
export const About = () => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" height="90vh">
    <Box>
      <Text fontSize={"3xl"} pb={"2"}>Organize all your docs in one place.</Text>
      <Divider />
      <Text fontSize={"2xl"}>This site is under progress...</Text>
    </Box>
    </Flex>
  )
}
