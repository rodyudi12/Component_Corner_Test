import './Hero.css'
import { useNavigate } from 'react-router-dom';

function Hero({title, subtitle, CallToAction, image}) { 
    const navigate = useNavigate()
    return(
        <div className="hero">
        <img src= {image} alt="Hero Banner" />
        <h1> {title} </h1>
        <p> {subtitle} </p>

        <button onClick = {() => navigate('./products')}>
            {CallToAction}
        </button>
        </div>
    )
}

export default Hero