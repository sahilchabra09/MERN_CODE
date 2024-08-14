import { useState } from 'react'
import "./card.css"

function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.image} alt="" srcset="" />
                <h2>Card {props.Number}</h2>
                <p>This is discription of Card{props.Number}</p>
            </div>
        </>


    )


}

export default Card
