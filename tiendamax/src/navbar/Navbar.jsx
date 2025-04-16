import { useState } from 'react';
import './navbarStyles.css';


function Navbar() {
    
    const [miniMenu,setMinimenu] = useState(false)

    return (

    <nav className="navbar">
        <div className="logo">
            <img src="/logo192.png" width={50} height={50} alt="Logo" />
        </div>

        <div className="menu-icon" onClick={() => setMinimenu(!miniMenu)}>
                ☰
        </div>

        <ul className={`nav-links ${miniMenu ? "active" : ""}`}>
            <li><a href="/">Inicio</a></li>
            <hr />
            <li><a href="/products">Productos</a></li>
            <hr />
            <li><a href="/contacts">Ofertas</a></li>
            <hr />
            <li><a href="/contacts">Contacto</a></li>
        </ul>
    </nav>
    
    );

}

export default Navbar;