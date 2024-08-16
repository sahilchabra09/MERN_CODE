import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Footer.css"
function Footer() {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/destination-path');
    }

    return (
        <footer>
            <h4>©️ Copyright 2024-2028 | Sahil Chabra All rights reserved</h4>
            <button
                onClick={handleClick}
            >Register now</button>
        </footer>
    )
}

export default Footer