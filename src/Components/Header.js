import React from 'react';
import Grid from '@material-ui/core/Grid';
import {motion } from 'framer-motion';
const headervariants={
    visible: { opacity: 1 ,
    },
    hidden: { opacity: 0, }
  }
  const logovariants={
      hidden:{
          opacity:0
      },
      visible:{
          opacity:1,
          
          transition:{duration:0.5 , type:"spring", stiffness: 100,}
      },
      hover:{scale:1.1}
  }
  const ulvariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }
  
  const livariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

 function Header(){
    return(
        <Grid xs={12}>
    <motion.header
    variants={headervariants}
    initial="hidden"
    animate="visible"
    
    >
        <motion.a href="#" className="header logo"
        variants={logovariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        >Logo</motion.a>
        <motion.ul
        variants={ulvariants}
        initial="hidden"
        animate="show"
        
        >
            <motion.li variants={livariants}> <a href="#" class="">Services</a></motion.li>
            <motion.li variants={livariants}> <a href="#" class="">About US</a></motion.li>
            <motion.li variants={livariants}> <a href="#" class="">PROJECTS</a></motion.li>
            <motion.li variants={livariants}> <a href="#" class="">BLOG</a></motion.li>
            <motion.li variants={livariants}> <a href="#" class="">ENG</a></motion.li>
            <motion.li variants={livariants}> <a href="#" className="header btn">GET IN TOUCH</a></motion.li>
        </motion.ul>
        
    </motion.header>
    </Grid>
    )
    
}
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
export default Header;