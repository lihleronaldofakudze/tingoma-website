import React from "react";

//React Router Dom
import { useNavigate } from "react-router-dom";

//Components
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

//Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const ForArtistPage = () => {
  //Variables
  const navigate = useNavigate();

  const changePage = (url) => {
    navigate(url);
  };
  return (
    <>
      <NavbarComponent title={"Tingoma for Artists"} />
      <Container
        maxWidth="md"
        sx={{ height: "100vh", p: 5, textAlign: "center" }}
      >
        <Typography variant="h2" color="initial" sx={{ mb: 3 }}>
          Submit New Music
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Typography variant="h4" color="initial">
              Submit New Single
            </Typography>
            <Paper sx={{ my: 2, textAlign: "start", p: 2 }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Requirements
              </Typography>
              <ol>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
              </ol>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => changePage("/upload_single")}
              >
                Continue
              </Button>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h4" color="initial">
              Submit New Album
            </Typography>
            <Paper sx={{ my: 2, textAlign: "start", p: 2 }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Requirements
              </Typography>
              <ol>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="initial">
                    Requirements
                  </Typography>
                </li>
              </ol>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => changePage("/upload_album")}
              >
                Continue
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <FooterComponent />
    </>
  );
};

export default ForArtistPage;
