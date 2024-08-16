import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import "./Nav.css"
import Logo from "../../images/logo.png"
function Nav() {

    let navigate = useNavigate();

    function handleClick() {
        navigate("/Login");
    }
    function handleClick2() {
        navigate('/SignUp');
    }
    return (
        <>
            <nav>
                <img src={Logo} alt="" className="logo" />
                <ul>
                    <li><NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
                    >
                        Home
                    </NavLink></li>
                </ul>
                <div className="buttons">
                    <button onClick={handleClick}>Login</button>
                    <button onClick={handleClick2}>SignUp</button>
                </div>
            </nav>
        </>
    )
}

export default Nav