import React from 'react';
import Grid from '@material-ui/core/Grid';
import About from './About';
import Services from './Servicescard';

export default function Slide2() {


  return (
    <div >
      <Grid container spacing={4}>
        
      <Grid item xs={12} sm={6}>
          <About/>
        </Grid>
        
    <Grid item xs={12} sm={6}> 
    <Services />
    </Grid>
    
    </Grid>  
    </div>
    );
    }
