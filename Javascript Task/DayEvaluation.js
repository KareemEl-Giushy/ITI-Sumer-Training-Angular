// Global array to store evaluations
const evaluationsArray = [];

function evaluateDay(date, evalValue) {
  const evaluationObject = {
    date: date,
    evaluation: evalValue
  };
  evaluationsArray.push(evaluationObject);
}

// Example usage:
evaluateDay('2023-07-26', 'Good');
evaluateDay('2023-07-27', 'Excellent');

console.log(evaluationsArray);