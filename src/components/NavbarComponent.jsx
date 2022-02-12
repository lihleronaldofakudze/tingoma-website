import React from "react";

//React Router Dom
import { useNavigate } from "react-router-dom";

//Icons
import MenuIcon from "@mui/icons-material/Menu";

//Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

const NavbarComponent = ({ title }) => {
  //variables
  const navigate = useNavigate();
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("sm"));

  const changePage = (url) => {
    navigate(url);
  };
  return (
    <AppBar position="relative" color="secondary" elevation={0.0}>
      <Toolbar>
        <Typography
          variant="h5"
          onClick={() => changePage("/")}
          sx={{ display: "flex", flex: 1, fontWeight: 900, cursor: "pointer" }}
        >
          {title}
        </Typography>
        {navigation.map((nav) => (
          <Button
            variant="text"
            color="inherit"
            onClick={() => changePage(nav.link)}
            sx={{
              textTransform: "none",
              mx: 2,
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            {nav.text}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

const navigation = [
  { text: "Premium", link: "/premium" },
  { text: "Support", link: "/support" },
  { text: "Download", link: "/download" },
  { text: "Sign up", link: "/sign_up" },
  { text: "Log in", link: "/log_in" },
];

export default NavbarComponent;
