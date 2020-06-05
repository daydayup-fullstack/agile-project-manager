import React from "react";
import "./DateDisplay.css";

const DateDisplay = ({ date }) => {
  const [isLate, setIsLate] = React.useState(false);
  const [isClose, setIsClose] = React.useState(false);
  const [dateString, setDateString] = React.useState("");
  // dueDate in seconds here
  const options = { month: "short", day: "numeric" };

  const dueDate = new Date(date * 1000);
  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1
  );

  React.useEffect(() => {
    setDateString(dueDate.toLocaleDateString("en-AU", options));

    if (
      dueDate.getFullYear() === tomorrow.getFullYear() &&
      dueDate.getMonth() === tomorrow.getMonth() &&
      dueDate.getDate() === tomorrow.getDate()
    ) {
      setIsClose(true);
      setDateString("Tomorrow");
    }

    if (
      dueDate.getFullYear() === today.getFullYear() &&
      dueDate.getMonth() === today.getMonth() &&
      dueDate.getDate() === today.getDate()
    ) {
      setIsClose(true);
      setDateString("today");
    }

    if (dueDate.getFullYear() < yesterday.getFullYear()) {
      setIsLate(true);
    } else if (dueDate.getMonth() < yesterday.getMonth()) {
      setIsLate(true);
    } else if (dueDate.getDate() <= yesterday.getDate()) {
      setIsLate(true);
    }
  }, [dueDate, options, today, tomorrow, yesterday]);

  return (
    <div className={`DateDisplay `}>
      <span className={`${isClose && "isClose"} ${isLate && "isLate"}`}>
        {dateString}
      </span>
    </div>
  );
};

export default DateDisplay;
