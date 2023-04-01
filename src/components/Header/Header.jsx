import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='main'>
        <div className='header'>
            <h2>Knowledge Cafe</h2>
            <div className='nav-bar'>
                <a href="/home">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            <img src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="" />
            </div>
            
        </div>
        <hr />
        
        </div>
        
    );
  };

export default Header;