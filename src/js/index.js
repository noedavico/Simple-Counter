//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondCounter from "./component/SecondCounter.jsx";

//declaro variables
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let weeks= 0;
let months= 0;

//funcion para contabilizar minutos/horas/dias/semanas/meses/
setInterval(function(){
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  if (hours === 24) {
    days++;
    hours = 0;
  }
  if (days === 7) {
    weeks++;
    days = 0;
  }
  if (weeks === 4) {
    months++;
    weeks = 0;
  }
  //render your react application
  ReactDOM.render(
    <SecondCounter
      seconds={seconds}
      minutes={minutes}
      hours={hours}
      days={days}
      weeks={weeks}
    months={months}
    />,
    document.querySelector("#app")
  );
}, 1000);