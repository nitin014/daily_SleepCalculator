//const getActualSleepHours = () => 7 + 6 + 8 + 7 + 6.5 + 9 + 8.5;

const getIdealSleepHours = (idealHoursPerNight) => idealHoursPerNight * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8); // Change 8 to your preferred hours per night

  if (actualSleepHours === idealSleepHours) {
    setResultMessage("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    const extraSleepHours = actualSleepHours - idealSleepHours;
    setResultMessage(
      `You got more sleep than needed. You overslept by ${extraSleepHours} hours.`
    );
  } else {
    const sleepDebt = idealSleepHours - actualSleepHours;
    setResultMessage(
      `You should get some rest. You are ${sleepDebt} hours under your ideal sleep.`
    );
  }
};

const setResultMessage = (message) => {
  document.getElementById("result-message").textContent = message;
};
const getActualSleepHours = () => {
  // Get the sleep hours entered by the user for each day
  const monday = parseFloat(document.getElementById("monday").value) || 0;
  const tuesday = parseFloat(document.getElementById("tuesday").value) || 0;
  const wednesday = parseFloat(document.getElementById("wednesday").value) || 0;
  const thursday = parseFloat(document.getElementById("thursday").value) || 0;
  const friday = parseFloat(document.getElementById("friday").value) || 0;
  const saturday = parseFloat(document.getElementById("saturday").value) || 0;
  const sunday = parseFloat(document.getElementById("sunday").value) || 0;

  // Calculate and return the total sleep hours
  return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
};

calculateSleepDebt();
