import React from "react";

//Components
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

//Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const WelcomePage = () => {
  return (
    <>
      <NavbarComponent />
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          height: "70vh",
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          color="inherit"
          sx={{ textAlign: "center", fontWeight: 900 }}
        >
          Art speaks where words are unable to explain
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, borderRadius: 20, px: 4, fontWeight: 900 }}
        >
          Start Free Session
        </Button>
      </Container>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          height: "70vh",
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" color="inherit">
          Umculo is the language of the spirit. It opens the secret of life
          bringing peace, abolishing strife.
        </Typography>
        <Button
          variant="contained"
          color="info"
          sx={{ mt: 3, borderRadius: 20, px: 4, fontWeight: 900 }}
        >
          Enjoy tingoma now
        </Button>
      </Container>
      <FooterComponent />
    </>
  );
};

export default WelcomePage;
