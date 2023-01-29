import React from "react";
import './Footer.css';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaGooglePlusG} from 'react-icons/fa';


const Footer = () => {
    return (
      <div className="footer">
         <div className="mainfooter">

            <div className="foot1">
               <h1>VACCOVID.LIVE</h1>
               <div className="linepart"><hr></hr></div>
               <p>
                  VacCovid is an up to date vaccine and covid-19 tracker which has
                  been landed in order to inform people from all over the planet about the present novel
                  coronavirus (COVID-19) pandemic.
              </p>
            </div>


            <div className="foot2">
               <h1>Vaccine</h1>
               <div className="linepart"><hr></hr></div>
               <div className="link1">
                 <a className="linkses" href="/vaccine">All Vaccines</a>
                 <a className="linkses" href="/vaccine">Pfizer</a>
                 <a className="linkses" href="/vaccine">Moderna</a>
                 <a className="linkses" href="/vaccine">Oxford</a>
                 <a className="linkses" href="/vaccine">Novavax</a>
                 <a className="linkses" href="/vaccine">Sinovac</a>
                </div>

                <h1 className="mrginTp">Treatment</h1>
               <div className="linepart"><hr></hr></div>
               <div className="link1">
                 <a className="linkses" href="/vaccine">All Treatments</a>
                 <a className="linkses" href="/vaccine">Remdesivir</a>
                 <a className="linkses" href="/vaccine">Favilavir</a>
                 <a className="linkses" href="/vaccine">Chloroquine</a>
                 <a className="linkses" href="/vaccine">Ivermectin</a>
                 <a className="linkses" href="/vaccine">Tocilizumab</a>
                </div>
            </div>


            <div className="foot3">
               <h1>COVID-19</h1>
               <div className="linepart"><hr></hr></div>
               
                <div className="linkxd1">
                  <div className="lxd1">
                   <a className="linkses" href="/vaccine">World Data</a>
                   <a className="linkses gaps" href="/vaccine">Canada</a>
                   <a className="linkses" href="/vaccine">Australia</a>
                   <a className="linkses" href="/vaccine">Japan</a>
                   <a className="linkses" href="/vaccine">France</a>
                   <a className="linkses" href="/vaccine">Netherlands</a>
                   <a className="linkses" href="/vaccine">China</a>
                   <a className="linkses" href="/vaccine">Colombia</a>
                   <a className="linkses" href="/vaccine">Mexico</a>
                   <a className="linkses" href="/vaccine">Peru</a>
                   <a className="linkses" href="/vaccine">Spain</a>
                   <a className="linkses" href="/vaccine">Ukraine</a>
                   </div>    
                   
                   <div className="lxd1">
                   <a className="linkses" href="/vaccine">United States of America</a>
                   <a className="linkses" href="/vaccine">India</a>
                   <a className="linkses" href="/vaccine">Brazil</a>
                   <a className="linkses" href="/vaccine">Germany</a>
                   <a className="linkses" href="/vaccine">United Kingdom</a>
                   <a className="linkses" href="/vaccine">Italy</a>
                   <a className="linkses" href="/vaccine">Chile</a>
                   <a className="linkses" href="/vaccine">Denmark</a>
                   <a className="linkses" href="/vaccine">Pakistan</a>
                   <a className="linkses" href="/vaccine">Russia</a>
                   <a className="linkses" href="/vaccine">Sweden</a>
                   </div>    
                 </div> 
            </div>


            <div className="foot4">
            <h1>Maps</h1>
            <div className="linepart"><hr></hr></div>
            <div className="link1">
              <a className="linkses" href="/vaccine">World Map</a>
              <a className="linkses" href="/vaccine">United States of <br></br>America Map</a>
              <a className="linkses" href="/vaccine">Canada Map</a>
              <a className="linkses" href="/vaccine">Brazil Map</a>
              <a className="linkses" href="/vaccine">Germany Map</a>
              <a className="linkses" href="/vaccine">Australia Map</a>
             </div>

             <h1 className="mrginTp">News</h1>
            <div className="linepart"><hr></hr></div>
            <div className="link1"> 
              <a className="linkses" href="/vaccine">Vaccine News</a>
              <a className="linkses" href="/vaccine">COVID-19 News</a>
              <a className="linkses" href="/vaccine">Health News</a>
             </div>
            </div>
         </div>

         
         <div className="icons">
         <hr className="pyq"></hr>
           <div className="alincen">         
             <FaInstagram />
             <FaTwitter />
             <FaFacebook />
             <FaLinkedin />
             <FaGooglePlusG/>
           </div>
           <p>Please let us know if we can provide any other additional features.</p>
         </div>

      </div>
    )
}

export default Footer;