import React from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';     
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
export default function Coursel(){
    return(
        <OwlCarousel
        className="owl-theme"
        items="1"
        autoplay
        
        dots={2}color='green'
        loop
        margin={10}
        >
            <div >
                <Paper>
                <Card className="courselitem">
                <span className="quotes">“</span>
                    <div className="carousel__item__staff">
                <img className="carousel__item__image" src="https://www.camo.ee/wp-content/uploads/2019/05/borglogo2.svg" alt=""/>
                <a className="link__green" href="#">View Project</a>
                </div>
                <p class="carousel__item__content">
						We like working with Camo. They did our current webpage and are working on the new one as we speak. We’re 100% certain it will be as impressive as the current one. Camo provides simplicity and a modern touch, and we appreciate it highly.</p>
                </Card>
                </Paper>
            </div>
            <div>
            <Card className="courselitem">
                <span className="quotes">“</span>
                    <div className="carousel__item__staff">
                    <img className="carousel__item__image" src="https://www.camo.ee/wp-content/uploads/2019/05/intcenta-logo-1.svg" alt=""/>
                <a className="link__green" href="#">View Project</a>
                </div>
                <p class="carousel__item__content">
                Collaboration with Camo means fast and flexible solutions. Camos design language is modern yet dashing. They always think along with the customer to find the best solution, i.e., cost-effective and bearing in mind your desires. If need be, Camo works round the clock. We appreciate it a lot. </p>
                </Card>
            </div>
        </OwlCarousel>
    )
}