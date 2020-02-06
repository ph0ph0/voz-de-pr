export const parseTime = createdAt => {
  const timePassedSinceCreation = parseTimeSinceCreation(createdAt);
  return timePassedSinceCreation;
};

const calculateSecondsPassedSinceCreation = creationDate => {
  const creationDateISO = new Date(creationDate);
  const currentDateISO = new Date();
  const creationDateInSeconds = creationDateISO / 1000;
  const currentDateInSeconds = currentDateISO / 1000;
  return Math.abs(creationDateInSeconds - currentDateInSeconds);
};

const parseTimeSinceCreation = dateCreated => {
  const secondsSinceCreation = calculateSecondsPassedSinceCreation(dateCreated);

  if (secondsSinceCreation <= 59) {
    //60 seconds in a minute
    const seconds = Math.floor(secondsSinceCreation);
    return `${seconds} segundo hace`;
  } else if (secondsSinceCreation <= 3599) {
    //3600 seconds in an hour
    const s = secondsSinceCreation < 120 ? "" : "s";
    const minutes = Math.round(secondsSinceCreation / 60);
    return `${minutes} minuto${s} hace`;
  } else if (secondsSinceCreation <= 86399) {
    //86,400 seconds in a day
    const s = secondsSinceCreation < 7200 ? "" : "s";
    const hours = Math.floor(secondsSinceCreation / 3600);
    return `${hours} hora${s} hace`;
  } else if (86400 <= secondsSinceCreation) {
    const days = Math.floor(secondsSinceCreation / 86400);
    const s = secondsSinceCreation < 172800 ? "" : "s";
    return `${days} día${s} hace`;
  }
};
