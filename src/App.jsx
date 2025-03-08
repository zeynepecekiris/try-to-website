import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toolbar, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

// Özel tema oluşturma
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#232f3e',
      light: '#37475A',
      dark: '#131921',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#ff9900',
      light: '#ffac31',
      dark: '#cc7a00',
      contrastText: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: 'rgba(255, 255, 255, 0.8)',
    },
    text: {
      primary: '#232f3e',
      secondary: '#37475A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, #aed7ff 0%, #ffd1dc 50%, #ffd4ba 100%)',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Navbar />
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
