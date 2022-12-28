import { Navbar } from "./components/navbar";
import { Topics } from "./components/topics";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box bgColor="rgb(41, 41, 41)" height="100vh">
      <Navbar />
      <Topics />
    </Box>
  );
}

export default App;
