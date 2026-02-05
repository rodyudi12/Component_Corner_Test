function CartItem({ name, price, onRemove }) {
  return (
    <div className="cart-item">
      <span>{name} - ${price}</span>
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}

export default CartItem
