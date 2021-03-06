import React from "react";
import'./StudyMaterials.css';
import {NavLink} from "react-router-dom";


const StudyMaterials=()=>{
    return(<> 
 
    <div className="sm-main">
    <div className='title'>
    <label >DIGITAL COMMUNICATION</label>
    <NavLink exact id="more-icon"  to="/More" >MORE</NavLink>
    </div>
    
    <div className='container1'>
    
    <iframe className="item item1"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="item"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="item"  src="https://www.youtube.com/embed/MdShEV8CpNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  {/*  <iframe className="item"  src="https://www.youtube.com/embed/sdqL1_hBMpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    */}
    </div>
    
    <label className='title'>EMBEDDED SYSYTEM</label>
    <div className='container2'>
    <iframe className="item item1"  src="https://www.youtube.com/embed/W4OfUjgCC7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="item"  src="https://www.youtube.com/embed/tScjSC-S-5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="item"  src="https://www.youtube.com/embed/52P6d6z3Ox8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   {/*  <iframe className="item"  src="https://www.youtube.com/embed/nzRhhOH1aOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    */}</div>
    

    </div>
    </>);
};

export default StudyMaterials;