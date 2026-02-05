import './ProductCard.css'

function ProductCard({name, price, image, description, addToCart}) {
    const product = {name, price, image, description}
    return( 
    <div className="product-card"> 
        <img src= {image} alt={name} /> 
        <h2> {name} </h2> 
        <p> {price}</p> 
        <p> {description} </p>
        <button onClick={() => addToCart(name, price, image, description)}>Add To Cart</button>
        </div> ) } 
export default ProductCard;