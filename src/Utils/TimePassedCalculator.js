const displayText = {
  en: {
    second: "second",
    minute: "minute",
    hour: "hour",
    day: "day",
    ago: "ago"
  },
  sp: {
    second: "segundo",
    minute: "minuto",
    hour: "hora",
    day: "día",
    ago: "hace"
  }
};

export const parseTime = (createdAt, language) => {
  const timePassedSinceCreation = parseTimeSinceCreation(createdAt, language);
  return timePassedSinceCreation;
};

const calculateSecondsPassedSinceCreation = creationDate => {
  const creationDateISO = new Date(creationDate);
  const currentDateISO = new Date();
  const creationDateInSeconds = creationDateISO / 1000;
  const currentDateInSeconds = currentDateISO / 1000;
  return Math.abs(creationDateInSeconds - currentDateInSeconds);
};

const parseTimeSinceCreation = (dateCreated, language) => {
  const secondsSinceCreation = calculateSecondsPassedSinceCreation(dateCreated);

  window.log(`LANGUAGE: ${language}`);

  if (secondsSinceCreation <= 59) {
    //60 seconds in a minute
    const seconds = Math.floor(secondsSinceCreation);
    return `${seconds} ${
      language === "spanish" ? "segundos hace" : "seconds ago"
    }`;
  } else if (secondsSinceCreation <= 3599) {
    //3600 seconds in an hour
    const s = secondsSinceCreation < 120 ? "" : "s";
    const minutes = Math.round(secondsSinceCreation / 60);
    return `${minutes} ${
      language === "spanish"
        ? `${displayText.sp.minute}${s} ${displayText.sp.ago}`
        : `${displayText.en.minute}${s} ${displayText.en.ago}`
    }`;
  } else if (secondsSinceCreation <= 86399) {
    //86,400 seconds in a day
    const s = secondsSinceCreation < 7200 ? "" : "s";
    const hours = Math.floor(secondsSinceCreation / 3600);
    return `${hours} ${
      language === "spanish"
        ? `${displayText.sp.hour}${s} ${displayText.sp.ago}`
        : `${displayText.en.hour}${s} ${displayText.en.ago}`
    }`;
  } else if (86400 <= secondsSinceCreation) {
    const days = Math.floor(secondsSinceCreation / 86400);
    const s = secondsSinceCreation < 172800 ? "" : "s";
    return `${days} ${
      language === "spanish"
        ? `${displayText.sp.day}${s} ${displayText.sp.ago}`
        : `${displayText.en.day}${s} ${displayText.en.ago}`
    }`;
  }
};
