import "./offer.css";
import offerImg from "../../assets/hero.png";
import { useState, useRef, useEffect, MutableRefObject } from "react";

type IntervalType = MutableRefObject<number> | MutableRefObject<undefined>;

const Offer = () => {
  const [timerDay, setTimerDay] = useState(0);
  const [timerHour, setTimerHour] = useState(0);
  const [timerMinute, setTimerMinute] = useState(0);
  const [timerSecond, setTimerSecond] = useState(0);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const interval: IntervalType = useRef();

  const startTimer = () => {
    const countdownDate = new Date("November 23 2024 00:00:00").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDay(days);
        setTimerHour(hours);
        setTimerMinute(minutes);
        setTimerSecond(seconds);
      }
    }, 1000);
  };

  return (
    <div className="offer">
      <div className="sold">
        <div className="header">
          <h1>Hot Watches</h1>
          <h1 className="act">Watches Collection</h1>
          <h1>Acessories</h1>
        </div>
        <div className="image">
          <img src={offerImg} alt="pulse clock image" />
        </div>
        <div className="timer">
          <h3>DEAL OF THE WEEK</h3>
          <h1>Multi-pocket Chest Watches Black</h1>
          <div className="time">
            <span>
              <h2>
                {timerDay < 10 ? 0 : ""}
                {timerDay}
              </h2>
              <h4>Days</h4>
            </span>
            <span>
              <h2>
                {timerHour < 10 ? 0 : ""} {timerHour}
              </h2>
              <h4>Hours</h4>
            </span>
            <span>
              <h2>
                {timerMinute < 10 ? 0 : ""} {timerMinute}
              </h2>
              <h4>Minutes</h4>
            </span>
            <span>
              <h2>
                {timerSecond < 10 ? 0 : ""} {timerSecond}
              </h2>
              <h4>Seconds</h4>
            </span>
          </div>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
