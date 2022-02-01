import React from "react";

//Component
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

//Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const PremiumPage = () => {
  return (
    <>
      <NavbarComponent />
      <Container maxWidth="xl">
        <Grid container spacing={1}></Grid>
      </Container>
      <FooterComponent />
    </>
  );
};

export default PremiumPage;
