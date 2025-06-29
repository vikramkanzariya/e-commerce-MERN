import React, { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc';
import CartItem from '../components/cartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = [
    {
      id: "1",
      photo: "https://m.media-amazon.com/images/I/71eUNTW+nJL._AC_UY218_.jpg",
      name: "Samsung",
      price: 42000,
      quantity: 3,
      stock: 10
    },

    {
      id: "2",
      photo: "https://m.media-amazon.com/images/I/71eUNTW+nJL._AC_UY218_.jpg",
      name: "MacBook",
      price: 92000,
      quantity: 3,
      stock: 10
    },
  ];
  const subTotal = 4000;
  const tax = Math.round(subTotal * 0.18);
  const shippingCharges = 200;
  const total = subTotal + tax + shippingCharges;
  const dicount = 400;

  const [couponCode, setCouponCode] = useState("");
  const [isValidCode, setIsValidCode] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(Math.random() > 0.5){
        setIsValidCode(true);
      }
      else{
        setIsValidCode(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      setIsValidCode(false);
    }
  }, [couponCode])

  return (
    <div className='cart'>
      <main>
        {
          cartItems?.length > 0 ? 
          cartItems.map((elem, index) => {
            return (
              <CartItem 
                key={index} 
                id={elem.id}
                name={elem.name}
                photo={elem.photo}
                price={elem.price}
                stock={elem.stock}
                quantity={elem.quantity}
              />
            )
          }) : <h1>No Items in Added in Cart</h1>
        }
      </main>

      <aside>
        <p>SubTotal: ₹{subTotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>


        <p>
          Discount: <em className='red'> - ₹{dicount} </em>
        </p>

        <p>
          <b>Total: ₹{total} </b>
        </p>

        <input 
          type="text" 
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder='Enter Coupon Code...'
        />

        {
          couponCode && (
            isValidCode ? <span className='green'>₹{dicount} off using the Code: <code>{couponCode}</code></span> : <span className='red'>Invalid Coupon Code <VscError /> </span>
          )
        }

        {
          cartItems.length > 0 &&
          <Link to={'/shipping'}>Checkout</Link>
        }
      </aside>
    </div>
  )
}

export default Cart