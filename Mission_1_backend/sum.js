// ------------------------------------------------- API 1 ---------------------------------------------------- //

//Function to take string and convert into number
//https://forum.freecodecamp.org/t/sum-all-letters-in-a-word-according-to-their-position-in-the-alphabet/247893/2
function calcString(str) {
  if (typeof str != "string") {
    return "Invalid Car Model input";
  }
  return (
    str
      .toLowerCase()
      .trim()
      .split("")
      .reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.charCodeAt(0) - 96,
        0
      ) * 100
  );
}
calcString("");

// --------------------------------- car year ------------------------- //
function carYear(year) {
  if (year < 0) {
    return "Invalid year";
  }
  return year;
}

carYear();

// -------------------------------- car value ------------------------- //
function carValue(calcString, carYear) {
  if (carYear < 0) {
    return "Invalid input";
  } else if (typeof calcString != "number") {
    return "Invalid input";
  } else if (typeof carYear === "string" || carYear === null) {
    return "Invalid input";
  } else if (typeof calcString === null) {
    return "Invalid input";
  }
  return calcString + carYear;
}

carValue();

// -------------------------------- API 2 --------------------------------- //

function riskRating(sentence) {
  const wordToExtract = /(collide|crash|scratch|bump|smash)/g;
  const extractedWords = [];

  let match;
  while ((match = wordToExtract.exec(sentence)) !== null) {
    extractedWords.push(match[0]);
  }

  const totalPoints = extractedWords.length;

  if (extractedWords.length === 0) {
    return 1;
  }

  return totalPoints;
}

riskRating();

// ----------------------------------------- API 3 --------------------------------------------------------- //

function finalQuote(carValue, riskRating) {
  const yearlyRating = ((carValue * riskRating) / 100).toFixed(0);
  const monthlyRating = (yearlyRating / 12).toFixed(1);
  return {
    monthly_premium: parseFloat(monthlyRating),
    yearly_premium: parseFloat(yearlyRating),
  };
}

finalQuote();

//-------------------------------- Module exports ---------------------//

module.exports = {
  carYear,
  calcString,
  carValue,
  riskRating,
  finalQuote,
};
