import React from "react";
import './Details.css';

const Details = () => {
    return (
         <div className="details">
        <p className="head1">
         <span className="green">INFECTION RISK:</span> Total Number of covid-19 cases divided by Total Population since the beginning of outbreak
         <span className="green"> TEST PERCENTAGE: </span> Total number of 
        </p> 
         
        <p className="head1">
        <span className="red">CASE FATALITY RATE (CFR):</span> Total Number of Deaths due to Covid-19 divided by Total Number of confirmed cases since 
        the beginning of outbreak
         (It shows that how lethal covid-19 is in any country)
        </p>
         
        <p className="head1">
        <span className="green">RECOVERY PERCENTAGE:</span>Total number of recovered cases divided by Total number of covid-19 cases
        </p>
          
         </div>
    )
}

export default Details;