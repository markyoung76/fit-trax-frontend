import React from 'react';
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
    id: '1',
    name: Services.ExercisePlanner,
    latestDetails: <>Latest Workout</>,
    img: exercisePlanner,
  },
  {
    id: '2',
    name: Services.MealPlanner,
    latestDetails: <>Latest Meal</>,
    img: mealPlanner,
  },
  {
    id: '3',
    name: Services.HydrationTracker,
    latestDetails: <>Latest Workout</>,
    img: hydrationTracker,
  },
  {
    id: '4',
    name: Services.MeditationPortal,
    latestDetails: <>Latest Meal</>,
    img: meditationPortal,
  },
];

type props = {
  theme: boolean;
};

function Mainboard({ theme }: props) {
  const handleCardClick = (id: string) => {
    /**
     * @TODO:
     * Card clicked -> open modal with id
     */
  };

  const renderGridContent = (card: Card) => (
    <Grid item xs={12} sm={6} key={card.id} style={gridStyle}>
      <Flippy flipOnHover={true} flipDirection="horizontal" style={cardStyle} onClick={() => handleCardClick(card.id)}>
        <FrontSide style={theme ? sideStyle : sideStyleDark}>
          <div style={titleStyle}>{card.name}</div>
          <div style={imageStyle(card.img)}></div>
        </FrontSide>

        <BackSide style={theme ? sideStyle : sideStyleDark}>{card.latestDetails}</BackSide>
      </Flippy>
    </Grid>
  );

  return (
    <Container fixed sx={mainBoardStyle}>
      <Grid container spacing={8}>
        {services.map(renderGridContent)}
      </Grid>
    </Container>
  );
}

export default Mainboard;
