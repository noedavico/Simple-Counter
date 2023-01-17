
import React from "react";
import PropTypes from "prop-types";


//Creo el componente del contador
const SecondCounter = ({ months, weeks, days, hours, minutes, seconds}) => {
	return (
	  <>
		<div className="mainCounter mx-auto">
		  <div className="row justify-content-center text-white" >
			<div className="clock col-2 digit shadow p-2 me-1 rounded-2">
			  <i className="far fa-clock #offset"></i>
			</div>
			<div className="clock col-1 digit shadow p-2 me-1 rounded-2">
			  {months}
			</div>
			<div className="clock col-1 digit shadow p-2 me-1 rounded-3">
			  {weeks}
			</div>
			<div className="clock col-1 digit shadow p-2 me-1 rounded-3">
			  {days}
			</div>
			<div className=" clock col-1 digit shadow p-2 me-1 rounded-3">
			  {hours}
			</div>
			<div className="clock col-1 digit shadow p-2 me-1 rounded-">
			  {minutes}
			</div>
			<div className="clock col-2 digit shadow p-2 rounded-3">
			  {seconds}
			</div>
		  </div>
		</div>
	  </>
	);
  };
  
  // Declaro las props
  
  SecondCounter.propTypes = {
	seconds: PropTypes.number,
	minutes: PropTypes.number,
	hours: PropTypes.number,
	days: PropTypes.number,
	weeks: PropTypes.number,
    months: PropTypes.number,
  };
  
  
  export default SecondCounter;