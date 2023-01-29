
import './Cntrywisedata.css'
import { useEffect,useState } from "react";




const Cntrywisedata = () => {

   const [val, setVal] = useState([]);

   useEffect(() => {
     (async () => {
       const res = await fetch(
         "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
         {
            method: 'GET',
            headers: {
         'X-RapidAPI-Key': '6361b18d5dmsh08d8963b44a29fep17c0d6jsn6096cdf46046',
         'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
         }
       );
       const jsonData = await res.json();
       console.log(jsonData);
       setVal(jsonData);
     })();
   }, []);  



   

    return (
      <div className="cntry">

         <div className="wrpbox">
             <span className="wr1">TOTAL CASES</span>
             <h2 className="result1">63,843,6604	</h2>
         </div>

         <div className="wrpbox">
            <span className="wr1">ACTIVE CASES</span>
            <h2 className="result2">13,535,705</h2>
         </div>

         <div className="wrpbox">
            <span className="wr1">TOTAL DEATHS</span>
            <h2 className="result4">66,08,108</h2>
         </div>
             
         <div className="wrpbox">
            <span className="wr1">NEW CASES</span>
            <h2 className="result1">67,303</h2>
         </div>

         <div className="wrpbox">
            <span className="wr1">CRITICAL</span>
            <h2 className="result3">35,698</h2>
         </div>

         <div className="wrpbox">
            <span className="wr1">NEW DEATHS</span>
            <h2 className="result4">76</h2>
         </div>
         
      </div>
    )
}

export default Cntrywisedata;