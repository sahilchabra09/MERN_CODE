import { useState } from 'react'
import './App.css'
import Card from "./assets/components/card.jsx";
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";
import img7 from "./assets/images/7.jpg";
import img8 from "./assets/images/8.jpg";
import img9 from "./assets/images/9.jpg";

function App() {
  return (
    <>
      <h1 id='mainh1'>All cards are here</h1>
      <div id="main">
        <div id="CardContainer">
          <Card Number="1" image={img1} />
          <Card Number="2" image={img2} />
          <Card Number="3" image={img3} />
          <Card Number="4" image={img4} />
          <Card Number="5" image={img5} />
          <Card Number="6" image={img6} />
          <Card Number="7" image={img7} />
          <Card Number="8" image={img8} />
          <Card Number="9" image={img9} />
        </div>
      </div>
    </>
  )
}

export default App
