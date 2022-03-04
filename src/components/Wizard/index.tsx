import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StepLabel } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DoneIcon from '@mui/icons-material/Done';
interface Props {
  steps: string[];
  stepsContent: JSX.Element[];
}

export default function Wizard({ steps, stepsContent }: Props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = () => stepsContent[activeStep];

  if (!steps) return null;

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
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
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 5, mb: 3 }}>{renderStepContent()}</Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              variant="outlined"
              color="secondary"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ borderRadius: '1rem' }}
            >
              <ArrowBackIosNewIcon />
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />

            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: '1rem' }}
              color="secondary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : <DoneIcon />}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
