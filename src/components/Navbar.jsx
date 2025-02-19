import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mobil Mağaza
        </Typography>
        <Button color="inherit" component={Link} to="/">Ana Sayfa</Button>
        <Button color="inherit" component={Link} to="/blog">Blog</Button>
        <Button color="inherit" component={Link} to="/about">Hakkımızda</Button>
        <Button color="inherit" component={Link} to="/contact">İletişim</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
