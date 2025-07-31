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
            <a href="/"><li>Inicio</li></a>
            <hr />
            <a href="/products"><li>Productos</li></a>
            <hr />
            <a href="/ofertas"><li>Ofertas</li></a>
            <hr />
            <a href="/contacts"><li>Contacto</li></a>
        </ul>
    </nav>
    
    );

}

export default Navbar;