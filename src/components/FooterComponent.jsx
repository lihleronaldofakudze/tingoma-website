import React from "react";

//React Router Dom
import { useNavigate } from "react-router-dom";

//Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

//Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";

const FooterComponent = () => {
  //variables
  const theme = useTheme();
  const navigate = useNavigate();

  const changePage = (url) => {
    navigate(url);
  };

  return (
    <AppBar
      position="relative"
      color="secondary"
      sx={{ color: "#FFFFFF", top: "auto", bottom: 0 }}
      elevation={0.0}
    >
      <Toolbar>
        <Container maxWidth="lg" disableGutters sx={{ my: 3 }}>
          <Grid container spacing={1}>
            <Grid item md={2} xs={16}>
              <Typography
                variant="h5"
                sx={{
                  display: "flex",
                  flex: 1,
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Tingoma
              </Typography>
            </Grid>
            <Grid item md={2} xs={16}>
              <Button
                variant="text"
                color="inherit"
                fullWidth
                sx={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  color: "#919496",
                  fontWeight: 900,
                }}
              >
                Company
              </Button>
              {navigation.map((nav) => {
                if (nav.topic === "company") {
                  return nav.links.map((link) => (
                    <Button
                      variant="text"
                      color="inherit"
                      fullWidth
                      sx={{
                        alignItems: "center",
                        justifyContent: "flex-start",
                        textTransform: "none",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      onClick={() => changePage(link.link)}
                    >
                      {link.name}
                    </Button>
                  ));
                } else {
                  return null;
                }
              })}
            </Grid>
            <Grid item md={2} xs={16}>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  color: "#919496",
                  fontWeight: 900,
                }}
              >
                Communities
              </Button>
              {navigation.map((nav) => {
                if (nav.topic === "communities") {
                  return nav.links.map((link) => (
                    <Button
                      variant="text"
                      color="inherit"
                      fullWidth
                      sx={{
                        alignItems: "center",
                        justifyContent: "flex-start",
                        textTransform: "none",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      onClick={() => changePage(link.link)}
                    >
                      {link.name}
                    </Button>
                  ));
                } else {
                  return null;
                }
              })}
            </Grid>
            <Grid item md={2} xs={16}>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  color: "#919496",
                  fontWeight: 900,
                }}
              >
                Other Links
              </Button>
              {navigation.map((nav) => {
                if (nav.topic === "other") {
                  return nav.links.map((link) => (
                    <Button
                      variant="text"
                      color="inherit"
                      fullWidth
                      sx={{
                        alignItems: "center",
                        justifyContent: "flex-start",
                        textTransform: "none",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      onClick={() => changePage(link.link)}
                    >
                      {link.name}
                    </Button>
                  ));
                } else {
                  return null;
                }
              })}
            </Grid>
            <Grid item md={4} xs={16}>
              <Stack direction="row" justifyContent="flex-end">
                <IconButton aria-label="instagram">
                  <InstagramIcon sx={{ color: "#FFFFFF" }} />
                </IconButton>
                <IconButton aria-label="instagram">
                  <FacebookRoundedIcon sx={{ color: "#FFFFFF" }} />
                </IconButton>
                <IconButton aria-label="instagram">
                  <TwitterIcon sx={{ color: "#FFFFFF" }} />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2 }}>
            {navigation.map((nav) => {
              if (nav.topic === "extras") {
                return nav.links.map((link) => (
                  <Button
                    variant="text"
                    color="inherit"
                    sx={{
                      alignItems: "center",
                      justifyContent: "flex-start",
                      textTransform: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                    onClick={() => changePage(link.link)}
                  >
                    {link.name}
                  </Button>
                ));
              } else {
                return null;
              }
            })}
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              variant="text"
              color="inherit"
              sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
                textTransform: "none",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              &copy; 2022 Tingoma CD
            </Button>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

const navigation = [
  {
    topic: "company",
    links: [
      { name: "About", link: "/about" },
      { name: "Jobs", link: "/jobs" },
      { name: "For the Record", link: "/for_the_artist" },
    ],
  },
  {
    topic: "communities",
    links: [
      { name: "For Artists", link: "/for_artist" },
      { name: "Developers", link: "/developers" },
      { name: "Advertising", link: "/advertising" },
      { name: "Investors", link: "/investors" },
      { name: "Vendors", link: "/vendors" },
    ],
  },
  {
    topic: "other",
    links: [
      { name: "Support", link: "/support" },
      { name: "Web Player", link: "/web_player" },
      { name: "Free Mobile App", link: "/free_mobile_app" },
    ],
  },
  {
    topic: "extras",
    links: [
      { name: "Legal", link: "/legal" },
      { name: "Privacy Center", link: "/privacy_center" },
      { name: "Privacy Policy", link: "/privacy_policy" },
      { name: "Cookies", link: "/cookies" },
      { name: "About Ads", link: "/about_ads" },
      { name: "Additional CA Privacy Disclosures", link: "/additional" },
    ],
  },
];

export default FooterComponent;
