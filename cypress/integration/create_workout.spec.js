describe('Testing create workout flow', () => {
  it('Passing Test', () => {
    expect(true).to.equal(true);
  });
  it('Creates our Epic workout!', () => {
    cy.visit('http://localhost:3000/exercise-planner');

    cy.get('#outlined-basic').type('Mega Ultra Super Duper Workout');
    cy.get('#outlined-select-workoutType').click();
    cy.contains('Full Body').click();
    cy.get('#outlined-select-workoutDifficulty').click();
    cy.contains('Advanced').click();

    cy.contains('Create Workout').click();

    cy.get('#nextButton').click();

    cy.get('#0').type('INHALE INTENSELY');
    cy.get('#10').type('12');
    cy.get('#20').type('5');
    cy.get('#30').type('30');

    cy.get('#addInputs').click();

    cy.get('#1').type('EXHALE FIERCELY');
    cy.get('#11').type('2');
    cy.get('#21').type('20');
    cy.get('#31').type('60');

    cy.get('#addInputs').click();

    cy.get('#2').type('RUN A MARATHON');
    cy.get('#12').type('1');
    cy.get('#22').type('9001');
    cy.get('#32').type('300');

    cy.get('#addInputs').click();

    cy.get('#3').type('FIGHT A CAT');
    cy.get('#13').type('1');
    cy.get('#23').type('3');
    cy.get('#33').type('300');

    cy.get('#submitExercises').click();

    cy.get('#nextButton').click();

    cy.get('#workoutMenu').click();

    cy.contains('Mega Ultra Super Duper Workout').click();
  });
});
