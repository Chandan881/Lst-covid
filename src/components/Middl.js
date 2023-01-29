import React from "react";
import Cntrywisedata from "./Cntrywisedata";
import Details from "./Details";
import './Middl.css';
import Rightmid from "./Rightmid";
import Sidebar from "./Sidebar";


const Middl = () => {
    return (
        <div className="mid">
          <div className="container">
              <div className="left-section">
                    <Sidebar/>
              </div>
              <div className="right-section">
                    <div className="right-top"><Cntrywisedata/></div>
                    <div className="right-middle"><Rightmid/></div>
                    <div className="right-bottom"><Details/></div>
              </div>
          </div>
        </div>
    )
}

export default Middl;