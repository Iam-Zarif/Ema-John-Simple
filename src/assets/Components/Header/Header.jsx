import React from 'react';
import './Header.css'

const Header = () => {
    return (
      <div className="header">
        <div>
          <h1 className="header-h1">Ema-John</h1>
        </div>
        <div className="header-a">
          <a href="#">Order</a>
          <a href="#">Order Review</a>
          <a href="#">Manage Inventory</a>
          <a href="#">Login</a>
        </div>
      </div>
    );
};

export default Header;