import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Footer from "./Footer";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";
import { useState } from "react";

function Home() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
        </Stack>
      </Box>
      <Footer/>
    </ThemeProvider>
  );
}

export default Home;