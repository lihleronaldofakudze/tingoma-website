import React from "react";

//Components
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

//Material Ui
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const steps = [
  "Create a new single",
  "Single additional information",
  "Upload single",
];

const UploadSinglePage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <NavbarComponent title={"Uploading Single"} />
      <Container maxWidth="lg" sx={{ height: "100vh", my: 2 }}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button variant="outlined">View your profile</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {(() => {
                if (activeStep === 0) {
                  return (
                    <Box sx={{ my: 2 }}>
                      <Typography variant="h4" color="initial">
                        Step {activeStep + 1} : Create New Single
                      </Typography>
                    </Box>
                  );
                } else if (activeStep === 1) {
                  return (
                    <Box sx={{ my: 2 }}>
                      <Typography variant="h4" color="initial">
                        Step {activeStep + 1} : Additional Information
                      </Typography>
                    </Box>
                  );
                } else if (activeStep === 2) {
                  return (
                    <Box sx={{ my: 2 }}>
                      <Typography variant="h4" color="initial">
                        Step {activeStep + 1} : Additional Information
                      </Typography>
                    </Box>
                  );
                }
              })()}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1
                    ? "Start sharing"
                    : "Save & Continue"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Container>
      <FooterComponent />
    </>
  );
};

export default UploadSinglePage;
