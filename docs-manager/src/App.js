import { Navbar } from "./components/navbar";
import { Topics } from "./components/topics";
import { Box } from "@chakra-ui/react";
function App() {
  // console.log("App");
  return (
    <Box bgColor="rgb(41, 41, 41)" height="100%">
      <Navbar />
      <Topics />
    </Box>
  );
}

export default App;
