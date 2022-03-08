import { Container, useTheme } from '@mui/material';
import Wizard from '../Wizard';
import { containerStyle } from './styles';
import ExercisePlannerStepOne from './ExercisePlannerStepOne';
import ExercisePlannerStepTwo from './ExercisePlannerStepTwo';
import ExercisePlannerStepThree from './ExercisePlannerStepThree';

const steps = ['Create/Edit workout', 'Create/Edit exercises', 'View workout'];
const stepsContent = [<ExercisePlannerStepOne />, <ExercisePlannerStepTwo />, <ExercisePlannerStepThree />];
const stepsTitles = ['Workout Planner', 'Exercise Planner', 'Workout Completion'];

const ExercisePlanner = () => {
  const theme = useTheme();

  return (
    <Container fixed sx={containerStyle(theme)}>
      <Wizard steps={steps} stepsContent={stepsContent} stepsTitles={stepsTitles} />
    </Container>
  );
};

export default ExercisePlanner;
