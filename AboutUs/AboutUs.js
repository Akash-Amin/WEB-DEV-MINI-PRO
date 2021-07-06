import React from "react";
import  "./AboutUs.css";
import swamiji from "./swamiji.png"
const AboutUs=()=>{
    return (<>
    <div className="aboutus-main">
        <div className="aboutus-container">
          <div className="aboutus-left">
          <img src={swamiji} className="aboutus-img"/>
          </div>
         <div className="aboutus-right">
           <div className="aboutus-content">  
             <h1>Heading</h1>
             <p>dddddd dddddd ddddddddd ddddd dddddd dddddddddd dddddddd dddddd dd dddddddddd ddddddddd dddddddddd ddddddddd dddddddd ddddddddd ddddddd ddddd dddddddddd dddddd dddddddd  dddd ddddd ddddd</p>
           </div>
         </div>
        </div>

       

        <div className="line-container">
        <div className="line-card">
        <div className="line-imgbx">
        <img src={swamiji} className="line-img"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h3 className="line-title" >TITLE </h3>
              <br/>
              <hr/>
              <br/>

              <article>content lies here ........</article> 
          </div>
        </div>
        </div>
       

        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={swamiji} className="line-img"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h3 className="line-title" >TITLE </h3>
              <br/>
              <hr/>
              <br/>

              <article>content lies here ........</article> 
          </div>
        </div>
        </div>

        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={swamiji} className="line-img"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
          <h3 className="line-title" >TITLE </h3>
              <br/>
              <hr/>
              <br/>

              <article>content lies here ........</article> 
          </div>
        </div>
        
        </div>
        
        
        
        <div className="line-card">
        <div className="line-imgbx">
        <img src={swamiji} className="line-img"/>
        </div> 
        <div className="line-content">
          <div className="line-contentbx">
              <h3 className="line-title" >TITLE </h3>
              <br/>
              <hr/>
              <br/>

              <article>content lies here ........</article> 
          </div>
        
        </div>
        </div>

        </div>
        </div>
        </>
    );
};

export default AboutUs;