export interface Exercise {
  id: number;
  name: string;
  sets: number;
  reps: number;
  restPeriod: string;
  workoutRef: string;
}

export interface Workout {
  id: string;
  name: string;
  type: string;
  difficulty: string;
}

export enum WorkoutDifficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export enum Services {
  ExercisePlanner = 'Exercise Planner',
  MealPlanner = 'Meal Planner',
  HydrationTracker = 'Hydration Tracker',
  MeditationPortal = 'Meditation Portal',
}

export interface Card {
  id: string;
  name: Services;
  latestDetails: JSX.Element;
  img: string;
}
