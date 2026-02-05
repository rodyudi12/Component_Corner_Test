import CartItem from '../components/CartItem'

function CartPage({ products, removeFromCart }) {
  const cartTotal = products.reduce(
    (total, item) => total + item.price,
    0
  )

  return (
    <div className="page-content cart-page">
  <h2>Your Cart</h2>
  {products.length === 0 ? (
    <p>Your cart is empty</p>
  ) : (
    products.map((item, index) => (
      <CartItem
        key={index}
        name={item.name}
        price={item.price}
        onRemove={() => removeFromCart(index)}
      />
    ))
  )}
  <h3>Total: ${cartTotal.toFixed(2)}</h3>
</div>

  )
}

export default CartPage
