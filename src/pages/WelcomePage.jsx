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
      <NavbarComponent title={"Tingoma for Emaswati"} />
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
          backgroundImage: `url(https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
          backgroundPosition: "cover",
        }}
      >
        <Typography
          variant="h2"
          color="inherit"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            color: "white",
          }}
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
          backgroundImage:
            "url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
          backgroundPosition: "center",
          backgroundCover: "cover",
        }}
      >
        <Typography variant="h3" color="inherit" sx={{ color: "white" }}>
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
