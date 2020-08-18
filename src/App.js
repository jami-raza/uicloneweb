import React from 'react';
import './App.css';
import Coursel from './Components/carousel';
import Slide2 from './Components/Slide2';
import Slide3 from './Components/Portfolio';
import Banner from './Components/Card1'
import Clientsec from './Components/clients';
import Footer from './Components/footer';
import Header from './Components/Header';


function App() {
  const Wrapper={
    hidden:{opacity:0},
    visible:{opacity:1,
    transition:{
      delay:5,
    }
    }
  }
  const Start={
    show:{opacity:1, duration:5},
    hide:{opacity:0,transition:{delay:5}}
  }
  return (
    <div>
      
      <Header/>
      <Banner />
      <Slide2/>
      <Slide3/>
      <Clientsec/>
      <Coursel/>
      <Footer/>
      
    </div>
  );
}

export default App;
