import React from 'react';
import {Tweenmax, Power} from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';
export default function About() {
  let aboutitem = useRef(null);
  useEffect(() => {
    console.log(aboutitem)
  }, [])
  return (  
   

    
      <div className="about">
    
        
            
        <h1 className="title">
          What we are great at
        </h1>
        
        <p className="p2">
        Fourteen years and 400+ finished web projects have gifted 
        us a unique experience on how to create something that is easy to use, looks great and earns a profit for your company. 
        </p>
      
      <button className="btn">Explore full services</button>
    </div>
  );
}