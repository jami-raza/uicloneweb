import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Service from '../services.json';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    display: 'inline-block'
    
  },
  Card:{
    padding: theme.spacing(1),
    backgroundColor: 'transparent'
  }
  }));
export default function Services({isVisible}) {
  
  const classes = useStyles();
  return (

<div className="services">
    {Object.keys(Service).map(keyName=>{
        const serv = Service[keyName];
        return(
          
          <div className={classes.root}>
          
        
        <Card className={classes.Card}
        
        >
        <h2 className="services title">
            {serv.name}
          </h2>  
        <img 
          className="services img"
          src={serv.img}
          alt={serv.name}
        />
          <p className="services p">
          {serv.desc}
          </p>
          <div className="link">
          <a href="#" className="link">Readmore</a>
          </div>
          </Card>
          
          
        </div>
        
        ) 
    
        
    })}
            
    
   
  </div>
  
  
        )
    
    }
