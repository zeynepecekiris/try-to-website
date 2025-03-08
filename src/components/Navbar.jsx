import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Ana Sayfa", icon: <HomeIcon />, path: "/" },
    { text: "Blog", icon: <ArticleIcon />, path: "/blog" },
    { text: "Hakkımızda", icon: <InfoIcon />, path: "/about" },
    { text: "İletişim", icon: <ContactMailIcon />, path: "/contact" },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: '#232f3e',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Toolbar>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          flexGrow: 1 
        }}>
          <img 
            src="/DALL·E 2025-03-08 11.45.25 - A simple and modern icon using gradient colors, fitting a tech-themed online store. The icon should have a sleek and professional design, using smooth.webp" 
            alt="Mobil Mağaza Logo" 
            style={{ 
              height: '40px',
              width: 'auto',
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))',
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#ffffff",
            }}
          >
            MobistoreX
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              sx={{ color: "#ffffff" }}
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  background: '#232f3e',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.text}
                  component={Link}
                  to={item.path}
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#ffffff",
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.icon}
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{
                  color: "#ffffff",
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
