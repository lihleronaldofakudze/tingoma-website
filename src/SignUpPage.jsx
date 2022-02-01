import React from "react";

//React Router Dom
import { useNavigate } from "react-router-dom";

//Component
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

//Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material";

const SignUpPage = () => {
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
          id="confirm_email"
          label="Enter your email again"
          type="email"
          //   value={}
          //   onChange={}
          sx={{ width: 450 }}
          margin="normal"
        />
        <TextField
          id="profile_name"
          label="Enter a profile name"
          type="text"
          helperText="This name will appear on your profile"
          //   value={}
          //   onChange={}
          sx={{ width: 450 }}
          margin="normal"
        />
        <TextField
          id="dob"
          helperText="Enter a date of birth"
          type="date"
          //   value={}
          //   onChange={}
          sx={{ width: 450 }}
          margin="normal"
        />
        <TextField
          id="dob"
          label="Choose gender"
          type="date"
          //   value={}
          //   onChange={}
          sx={{ width: 450 }}
          margin="normal"
          select
        >
          {["Male", "Female", "Non-binary"].map((gender) => (
            <MenuItem onClick={() => {}}>{gender}</MenuItem>
          ))}
        </TextField>
        <Typography variant="caption" color="initial">
          By clicking on sign-up, you agree to Spotify's{" "}
          <span
            style={{ cursor: "pointer", color: theme.palette.primary.main }}
          >
            Terms and Conditions of Use
          </span>
          .
        </Typography>
        <Typography
          variant="caption"
          color="initial"
          sx={{ textAlign: "center", my: 2 }}
        >
          To learn more about how Spotify collects, uses, shares and protects
          your personal data, please see .
          <span
            style={{ cursor: "pointer", color: theme.palette.primary.main }}
          >
            Spotify's Privacy Policy
          </span>
          .
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, borderRadius: 20, px: 4, fontWeight: 900 }}
        >
          Sign Up
        </Button>
        <Typography variant="body1" color="initial" sx={{ my: 2 }}>
          Have an account?{" "}
          <span
            style={{
              color: theme.palette.primary.main,
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => changePage("/log_in")}
          >
            Log in
          </span>
        </Typography>
      </Container>
      <FooterComponent />
    </>
  );
};

export default SignUpPage;
