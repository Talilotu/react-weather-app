import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  hours = ("0" + hours).slice(-2);
  let minutes = props.date.getMinutes();
  minutes = ("0" + minutes).slice(-2);

  return (
    <div>
      {day} {hours}: {minutes}
    </div>
  );
}
