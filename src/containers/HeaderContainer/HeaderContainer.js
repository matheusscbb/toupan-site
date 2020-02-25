import React from 'react';
import { Link } from 'react-router-dom';


const HeaderBarContainer = () => {
  return (
    <header className="HeaderBarContainer ">
      <nav className="HeaderBarContainer__Navigation container">
        <Link to="/">
          <div className="HeaderBarContainer__Navigation--logo-area">
            <img src="../assets/logos/logo-mid.png" alt="logo da Toupan, o melhor para sua casa"/>
            <span className="separator"/>
            <p>Loja</p>
          </div>
        </Link>
        
        <div className="HeaderBarContainer__Navigation--link-area">
          <ul>
            <li>Site Institucional</li>
            <li>Fale Conosco</li>
          </ul>
          
          <ul>
            <li>users</li>
            <li><Link to="/carrinho">cart</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default HeaderBarContainer;