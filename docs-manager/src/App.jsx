import { Navbar } from "./components/Navbar";
import { Topics } from "./components/Topics";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Box } from "@chakra-ui/react";
import { Contents } from "./components/Contents";
function App() {
  // console.log("App");
  return (
    <Box bgColor="rgb(41, 41, 41)" height="100%">
      <Navbar />
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/about" element={<About />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      {/* <Topics /> */}
    </Box>
  );
}

export default App;
