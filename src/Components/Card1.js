import React from 'react';
import {motion} from 'framer-motion';
import Grid from '@material-ui/core/Grid';
import Icon from './Svg/Banner'
import Waves from './Waves'

const heading={
    hidden:{opacity:0},
    visible:{opacity:1,
    
    }
}
const banner = {
    hidden:{opacity:0},
    visible:{opacity:1,
    transition:{delay:1,type:"spring",stiffness:70,ease:"easeIn"}
    },
}

export default function Banner(){
    
    return(
        <div className="Container">
        
      
      
        
          <div className="maindiv"
          
          
          >
              <Grid container spacing={2}>
              <motion.Grid item xs={12}
              variants={heading}
              initial="hidden"
              animate="visible"
              >
          <h1 className="h1">Your web presence just got so much better</h1>
          <p className ="p">Your company’s website isn’t just a digital business card or a few brush strokes here and there. It’s an essential sales channel, and it has rules. You need it to survive in the jungle of business.</p>
          <div className="banner__button">
              <a  href="#" className="banner__btn__green">
                  <span>
                work with us
                </span>
              </a>
              <a  href ="#" className="banner__btn__green">
                  <span>
                view our projects
                </span>
              </a>
          </div>
          
          </motion.Grid>
          
          
            </Grid>
            
            </div>
            <div className="waves">
            <Waves />
            </div>
            <motion.div className="bannerimg"
            variants={banner}
            initial="hidden"
            animate="visible"
            
            >
            
            
            <Icon/>
            </motion.div>
            </div>
            
        
        
        
            
            
            
        
    )
}
