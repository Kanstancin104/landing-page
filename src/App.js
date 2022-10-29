import Header from "./components/Header";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Speakers from "./components/Speakers";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth={"xl"}>
        <Header />
        <Title />
        <Speakers />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
