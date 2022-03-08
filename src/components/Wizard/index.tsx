import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme, Box, Stepper, Step, Button, Typography, StepLabel } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DoneIcon from '@mui/icons-material/Done';
import { actionsBoxStyle, buttonStyle, contentBoxStyle, wizardBoxStyle } from './styles';

interface Props {
  steps: string[];
  stepsContent: JSX.Element[];
  stepsTitles: string[];
}

export default function Wizard({ steps, stepsContent, stepsTitles }: Props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const theme = useTheme();

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      navigate('/');
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepper = () => (
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
  );

  const renderStepTitle = () => (
    <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontFamily: 'Courier New' }}>{stepsTitles[activeStep]}</h1>
  );

  const renderStepContent = () => stepsContent[activeStep];

  if (!steps) return null;

  return (
    <Box sx={wizardBoxStyle}>
      {renderStepTitle()}
      {renderStepper()}

      {activeStep === steps.length ? (
        navigate('/')
      ) : (
        <React.Fragment>
          <Box sx={contentBoxStyle(theme)}>{renderStepContent()}</Box>

          <Box sx={actionsBoxStyle}>
            <Button variant="outlined" color="secondary" onClick={handleBack} sx={buttonStyle}>
              <ArrowBackIosNewIcon />
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={buttonStyle}
              color="secondary"
              onClick={handleNext}
              id="nextButton"
            >
              {activeStep === steps.length - 1 ? 'Finish' : <DoneIcon />}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
