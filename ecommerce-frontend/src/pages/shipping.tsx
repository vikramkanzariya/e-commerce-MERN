import { useState, type ChangeEvent } from "react"
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="shipping">
      <button 
        className="back-btn" 
        onClick={() => navigate('/cart')}
        >
          <BiArrowBack /> 
      </button>

      <form action="">
        <h1>Shipping Address</h1>

        <input 
          type="text" 
          placeholder="address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
          required
        />

        <input 
          type="text" 
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
          required
        />

        <input 
          type="text" 
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
          required
        />

        <select 
          value={shippingInfo.country} 
          name="country" 
          onChange={changeHandler}
          required
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
        </select>

        <input 
          type="number" 
          placeholder="Pin Code"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
          required
        />


        <button type="submit">Pay Now</button>

      </form>
    </div>
  )
}

export default Shipping