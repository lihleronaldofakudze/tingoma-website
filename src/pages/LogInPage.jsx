import React from "react";

//React Router Dom
import { useNavigate } from "react-router-dom";

//Component
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

//Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme, FormControlLabel, Checkbox } from "@mui/material";

const LogInPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const changePage = (url) => {
    navigate(url);
  };
  return (
    <>
      <NavbarComponent />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            flex: 1,
            fontWeight: 900,
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          Tingoma
        </Typography>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            flex: 1,
            fontWeight: 900,
            cursor: "pointer",
            textAlign: "center",
            my: 3,
          }}
        >
          Sign up for free to start listening.
        </Typography>
        <Button
          variant="contained"
          color="info"
          sx={{
            width: 250,
            borderRadius: 20,
            my: 1,
          }}
        >
          Continue with Facebook
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            width: 250,
            borderRadius: 20,
            my: 1,
          }}
        >
          Continue with Google
        </Button>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            my: 2,
          }}
        >
          or
        </Typography>
        <TextField
          id="email"
          label="Enter your email"
          type="email"
          //   value={}
          //   onChange={}
          sx={{ width: 450 }}
          margin="normal"
        />
        <TextField
          id="password"
          label="Enter password"
          helperText="Password should at least 6 characters"
          type="password"
          //   value={}
          //   onChange={}
          sx={{ width: 450 }}
          margin="normal"
        />
        <Button variant="text" color="inherit">
          Forgot Password?
        </Button>
        <FormControlLabel
          label="Remember Me."
          control={
            <Checkbox
              value="remember"
              //   checked={}
              //   onChange={}
              color="success"
            />
          }
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, borderRadius: 20, px: 4, fontWeight: 900 }}
        >
          Log In
        </Button>
        <Typography variant="body1" color="initial" sx={{ my: 2 }}>
          Don't have an account?{" "}
          <span
            style={{
              color: theme.palette.primary.main,
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => changePage("/sign_up")}
          >
            Sign Up
          </span>
        </Typography>
      </Container>
      <FooterComponent />
    </>
  );
};

export default LogInPage;
