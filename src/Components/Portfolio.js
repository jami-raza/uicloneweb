import React from 'react';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image3 from '../images/image3.jpeg';
import Portfosvg from './PortFo';
import Portfosvg2 from './Portfosvg2';

export default function Slide3() {


  return (
    
      
    
          <div className="Portfol">
              <Portfosvg/>
          <h2 className="Portfol h1">
              Our Portfolio
          </h2>
          <p className="Portfol p">
          User-friendly web pages are our thing. We’ve also helped some awesome businesses with branding and custom solutions.
          </p>
          
          <div >
              
          <img className="imgstyles"src={image4} alt=""/>
          
          <img className="imgstyles"src={image5} alt=""/>
         
          <img className="imgstyles"src={image3} alt=""/>
          
          </div>
          

             <Portfosvg2/> 
              
          </div>
      
    
  );
}