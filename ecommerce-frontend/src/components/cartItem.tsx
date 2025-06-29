import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CartItemProps {
  id: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
}

const CartItem = ({
  id,
  name,
  price,
  photo,
  stock, 
  quantity
}: CartItemProps) => {
  return (
    <div className="cart-item">
      <img src={photo} alt={name} />

      <article>
        <Link to={`/product/${id}`}>{name}</Link>
        <span>₹{price}</span>
      </article>
      
      <div>
        <button>-</button>
        <button className="qty">Quantity</button>
        <button>+</button>
      </div>

      <button>{<FaTrash />}</button>

    </div>
  )
}

export default CartItem