import ProductCard from '../components/ProductCard'

function ProductsPage({ products, addToCart }) {
  return (
    <div className="products-page">
      <h2>Our Products</h2>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
