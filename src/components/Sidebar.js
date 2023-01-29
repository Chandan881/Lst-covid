import React from "react";
import "./Sidebar.css";
import { useEffect,useState } from "react";

const Sidebar = () => {

  const [dita, setDita] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "6361b18d5dmsh08d8963b44a29fep17c0d6jsn6096cdf46046",
            "X-RapidAPI-Host":
              "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
          }
        }
      );
      const jsonData = await res.json();
      console.log(jsonData);
      setDita(jsonData);
    })();
  }, []);  


  
  return (
    <div className="sidebar">


      <ul className="sidein">
        <h2 className="conti">Continents</h2>

          <a className="ancr1" href="/world-data">World</a>
          <a className="ancr1" href="/asia-data">Asia</a>
          <a className="ancr1" href="/africa-data">Africa</a>
          <a className="ancr1" href="/australia-data">Australia</a>
          <a className="ancr1" href="/europe-data">Europe</a>
          <a className="ancr1" href="/na-data">North America</a>
          <a className="ancr1" href="/sa-data">South America</a>
          <a className="ancr1" href="/oceiana-data">Oceania</a>
      </ul>

      <ul className="sidein2">
        <h2 className="conti">Most Viewed</h2>

          <a className="ancr1" href="/usdata">United States</a>
          <a className="ancr1" href="/canadadata">Canada</a>
          <a className="ancr1" href="/aus-data">Australia</a>
          <a className="ancr1" href="/uk-data">United Kingdom</a>
          <a className="ancr1" href="/In-data">India</a>
      </ul>

      <ul className="sidein2">
        <h2 className="conti">Country</h2>

        {
          dita.map((elm, ind) => 
          <a key={ind} className="ancr1" href="/whole-data">{elm.Country}</a>
          )
        }
        
        
      </ul>
    </div>
  );
};

export default Sidebar;
