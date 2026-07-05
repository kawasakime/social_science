import React from "react";

interface Props {
  endtime: string;
}

interface TimeRemaining {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerUnitProps {
  id: string;
  label: string;
  value: number;
}

interface TimerDigitProps {
  digit: string;
}

const ANIMATION_DURATION = 360;

function getTimeRemaining(endtime: Date): TimeRemaining {
  const t = Date.parse(endtime.toISOString()) - Date.parse(new Date().toISOString());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days,
    hours,
    minutes,
    seconds,
  };
}

function numberFormatting(number: number): string {
  return number >= 10 ? String(number) : `0${number}`;
}

const TimerDigit = ({ digit }: TimerDigitProps) => {
  const [currentDigit, setCurrentDigit] = React.useState(digit);
  const [previousDigit, setPreviousDigit] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (digit === currentDigit) {
      return undefined;
    }

    setPreviousDigit(currentDigit);
    setCurrentDigit(digit);

    const timeout = window.setTimeout(() => {
      setPreviousDigit(null);
    }, ANIMATION_DURATION);

    return () => window.clearTimeout(timeout);
  }, [currentDigit, digit]);

  return (
    <span className="timer__digit">
      {previousDigit && (
        <span key={`old-${previousDigit}`} className="timer__digit-old">
          {previousDigit}
        </span>
      )}
      <span
        key={`new-${currentDigit}`}
        className={previousDigit ? "timer__digit-new" : undefined}
      >
        {currentDigit}
      </span>
    </span>
  );
};

const TimerUnit = ({ id, label, value }: TimerUnitProps) => {
  const formattedValue = value < 0 ? "00" : numberFormatting(value);

  return (
    <div id={id}>
      <h1 className="timer__value">
        {formattedValue.split("").map((digit, index) => (
          <TimerDigit key={`${id}-${index}`} digit={digit} />
        ))}
      </h1>
      <p>{label}</p>
    </div>
  );
};

const Timer = ({ endtime }: Props) => {
  const deadline = React.useMemo(() => new Date(endtime), [endtime]);
  const [time, setTime] = React.useState<TimeRemaining>(getTimeRemaining(deadline));

  React.useEffect(() => {
    const initializeClock = setInterval(() => {
      const nextTime = getTimeRemaining(deadline);

      setTime(nextTime);

      if (nextTime.total <= 0) {
        clearInterval(initializeClock);
      }
    }, 1000);

    if (getTimeRemaining(deadline).total <= 0) {
      clearInterval(initializeClock);
    }

    return () => clearInterval(initializeClock);
  }, [deadline]);

  return (
    <div className="timer">
      <TimerUnit id="days" label="Дней" value={time.days} />
      <TimerUnit id="hours" label="Часов" value={time.hours} />
      <TimerUnit id="minutes" label="Минут" value={time.minutes} />
      <TimerUnit id="seconds" label="Секунд" value={time.seconds} />
    </div>
  );
};

export default Timer;
