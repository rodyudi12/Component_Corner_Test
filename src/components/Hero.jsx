import './Hero.css'

function Hero({title, subtitle, CallToAction, image}) {
    return(
        <div className="hero">
        <img src= {image} alt="Hero Banner" />
        <h1> {title} </h1>
        <p> {subtitle} </p>
        <button> {CallToAction} </button>
        </div>
    )
}

export default Hero