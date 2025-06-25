import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; 
import './ShoppingCart.css'; 

const ShoppingCart = () => {

  const dispatch = useDispatch(); // Dispatch actions to Redux store
  const cartItems = useSelector(state => state.cart.cartItems) // Get cart items from Redux store
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)  //Iteration over cart items to calculate total amount from 0 to the total amount

  const handleRemoveItem = itemId => {
    dispatch (removeItemFromCart(itemId))
  }

  const handleClearCart = () => {
    dispatch (clearCart())
  }

  const handleIncreaseQuantity = itemId => {
    dispatch (increaseItemQuantity(itemId))
  }

  const handleDecreaseQuantity = itemId => {
    dispatch (decreaseItemQuantity(itemId))
  }

  return (
    <>
    
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <ul className="cart-items">
        {
          cartItems.map(item => (
            <li key={item.id} className= "cart-item">
              <span>
                {item.name} - ${item.price} - {item.quantity}
              </span>
              <div>
                <button 
                  className= "quantity-control-btn"
                  onClick= {() => handleDecreaseQuantity(item.id)}>              
                  -
                </button>
                <button
                  className= "quantity-control-btn"
                  onClick= {() => handleIncreaseQuantity(item.id)}>
                  +
                </button>
              </div>
              <button
                className= "remove-item-btn"
                onClick= {() => handleRemoveItem(item.id)}>
                Remove
              </button>
            </li>
          ))
        }
        </ul>
        <button 
          className="clear-cart-btn"
          onClick={handleClearCart}>
          Clear Cart
        </button>
        <div>
          {
            totalAmount ? <div className="cart-total">Total Amount: {totalAmount}</div> : ""
          }
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
