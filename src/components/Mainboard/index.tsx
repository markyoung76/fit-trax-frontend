import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Grid from '@mui/material/Grid';
import exercisePlanner from '../../assets/images/exercise_planner.png';
import mealPlanner from '../../assets/images/meal_planner.png';
import hydrationTracker from '../../assets/images/hydration_tracker.png';
import meditationPortal from '../../assets/images/meditation_portal.png';
import { Card, Services } from '../../types';
import { mainBoardStyle, cardStyle, sideStyle, gridStyle, imageStyle, titleStyle, sideStyleDark } from './styles';

const services: Card[] = [
  {
    id: Services.ExercisePlanner,
    name: Services.ExercisePlanner,
    latestDetails: <>Latest Workout</>,
    img: exercisePlanner,
  },
  {
    id: Services.MealPlanner,
    name: Services.MealPlanner,
    latestDetails: <>Latest Meal</>,
    img: mealPlanner,
  },
  {
    id: Services.HydrationTracker,
    name: Services.HydrationTracker,
    latestDetails: <>Latest Hydration</>,
    img: hydrationTracker,
  },
  {
    id: Services.MeditationPortal,
    name: Services.MeditationPortal,
    latestDetails: <>Latest Meditation</>,
    img: meditationPortal,
  },
];

interface Props {
  theme: boolean;
}

function Mainboard({ theme }: Props) {
  const navigate = useNavigate();

  const handleCardClick = (id: Services) => {
    switch (id) {
      case Services.ExercisePlanner: {
        navigate('exercise-planner');
        break;
      }
      case Services.MealPlanner: {
        navigate('meal-planner');
        break;
      }
      case Services.HydrationTracker: {
        navigate('hydration-tracker');
        break;
      }
      case Services.MeditationPortal: {
        navigate('meditation-portal');
        break;
      }
      default:
        break;
    }
  };

  const renderCard = (card: Card) => (
    <Grid item xs={12} sm={6} key={card.id} style={gridStyle}>
      <Flippy
        flipOnHover={true}
        flipDirection="horizontal"
        style={cardStyle}
        onClick={() => handleCardClick(card.id as Services)}
      >
        <FrontSide style={theme ? sideStyle : sideStyleDark}>
          <div style={titleStyle}>{card.name}</div>
          <div style={imageStyle(card.img)}></div>
        </FrontSide>

        <BackSide style={sideStyle}>{card.latestDetails}</BackSide>
      </Flippy>
    </Grid>
  );

  return (
    <Container fixed sx={mainBoardStyle}>
      <Grid container spacing={8}>
        {services.map(renderCard)}
      </Grid>
    </Container>
  );
}

export default Mainboard;
