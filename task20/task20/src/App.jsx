import { useState } from 'react';
import logo from "./assets/logo.png";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const shoes = [
    { id: 1, name: "White Casual Sneaker", price: 70, image: one },
    { id: 2, name: "MACTREE Men's Mid Top Ankle Boots", price: 90, image: two },
    { id: 3, name: "Shoe 3", price: 80, image: three },
    { id: 4, name: "Shoe 4", price: 100, image: four },
    { id: 5, name: "Shoe 5", price: 150, image: five },
  ];

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shoe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (shoeId) => {
    setCart((prevCart) => {
      return prevCart
        .map(item =>
          item.id === shoeId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <nav>
        <img id='logo' src={logo} alt="Logo" />
        <ul id="nav-ul">
          <li className="nav-li"><a href="#">Home</a></li>
          <li className="nav-li"><a href="#">Categories</a></li>
          <li className="nav-li"><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="maincontainer">
        {/* Left side: Display Shoes */}
        <div id="leftdiv">
          {shoes.map(shoe => (
            <div className="shoeBox" key={shoe.id}>
              <img className="shoe-img" src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <div className="priceCart">
                <p>💲{shoe.price}</p>
                <button className="Addtocart" onClick={() => addToCart(shoe)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        {/* Right side: Display Cart */}
        <div id="rightdiv">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img className="cart-img" src={item.image} alt={item.name} />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
              <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
