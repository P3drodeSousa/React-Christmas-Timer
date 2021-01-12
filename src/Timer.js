import React, { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const difference = new Date("2021-12-25") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="timer-els">
        <p>
          {timeLeft[interval] < 10
            ? `0${timeLeft[interval]}`
            : timeLeft[interval]}
        </p>
        <span>{interval}</span>
      </div>
    );
  });

  return (
    <div>
      <h1>Christmas Countdown</h1>
      <div className="timer-container">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Merry Christmas!</span>
        )}
      </div>
    </div>
  );
};

export default Timer;
