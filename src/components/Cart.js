// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

const imgStyle = {
    width: '200px', // Adjust width as needed
    height: '200px', // Maintain aspect ratio
    // borderRadius: '50%', // Make the image round (for example)
    border: '2px solid #ccc', // Add a border
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a shadow
  };

const Cart = () => {
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h2>Cart</h2>
      

    
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='cartbox' style={{display:"flex",}}> 
          {cartItems.map(item => (<div  key={item.id}>
            <img style={imgStyle} src={item.image} alt='img'/>
            <li>
              {item.name} - ${item.price}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
            </div>
           
           
          ))}
        </div> 
      )}
       
    </div>
  );
};

export default Cart;
