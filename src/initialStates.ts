import { WorkoutDifficulty } from './types';

export const exerciseInitialState = [
  {
    name: 'pushups',
    sets: 2,
    reps: 20,
    restPeriod: '60 seconds',
    workoutRef: 'dbd0d2c1-84f9-4413-b4ed-eed2b266d10d',
  },
  {
    name: 'Shoulder press (dumbbells)',
    sets: 3,
    reps: 10,
    restPeriod: '90 seconds',
    workoutRef: 'dbd0d2c1-84f9-4413-b4ed-eed2b266d10d',
  },
  {
    name: 'tri-angle pushups',
    sets: 3,
    reps: 20,
    restPeriod: '90 seconds',
    workoutRef: 'dbd0d2c1-84f9-4413-b4ed-eed2b266d10d',
  },
  {
    name: 'pullups',
    sets: 2,
    reps: 8,
    restPeriod: '60 seconds',
    workoutRef: '30406bf3-2c20-4413-88af-18967f21173d',
  },
  {
    name: 'rear-delt flys (dumbbells)',
    sets: 4,
    reps: 12,
    restPeriod: '60 seconds',
    workoutRef: '30406bf3-2c20-4413-88af-18967f21173d',
  },
  {
    name: 'bicep curls (dumbbels)',
    sets: 2,
    reps: 15,
    restPeriod: '60 seconds',
    workoutRef: '30406bf3-2c20-4413-88af-18967f21173d',
  },
  {
    name: 'squats (bodyweight)',
    sets: 2,
    reps: 20,
    restPeriod: '60 seconds',
    workoutRef: '84b4d01d-7a8b-4be4-9345-8a77febaf70c',
  },
  {
    name: 'jumping jacks',
    sets: 1,
    reps: 30,
    restPeriod: '60 seconds',
    workoutRef: '84b4d01d-7a8b-4be4-9345-8a77febaf70c',
  },
  {
    name: 'good mornings',
    sets: 2,
    reps: 10,
    restPeriod: '45 seconds',
    workoutRef: '84b4d01d-7a8b-4be4-9345-8a77febaf70c',
  },
];

export const workoutInitialState = [
  {
    id: 'dbd0d2c1-84f9-4413-b4ed-eed2b266d10d',
    name: 'Push workout',
    type: 'Upper Body',
    difficulty: WorkoutDifficulty.Intermediate,
  },
  {
    id: '30406bf3-2c20-4413-88af-18967f21173d',
    name: 'Pull workout',
    type: 'Upper Body',
    difficulty: WorkoutDifficulty.Intermediate,
  },
  {
    id: '84b4d01d-7a8b-4be4-9345-8a77febaf70c',
    name: 'legs workout',
    type: 'Lower Body',
    difficulty: WorkoutDifficulty.Beginner,
  },
  {
    id: '25f33728-2d14-4df2-a9e9-7686bdf8bf26',
    name: 'HITT Workout',
    type: 'Full Body',
    difficulty: WorkoutDifficulty.Advanced,
  },
];
