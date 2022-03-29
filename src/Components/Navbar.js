import React, {Component} from 'react';
import './Navbar.css';


class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className='navbar'>
                <img className='logo' src='SWO_logo.png' alt='SWO_logo' />
                <h2 className='welcome'>Welcome to the Skill Matrix</h2>
                <div className='item-holder'>
                    <a><img className='nav-item' src='MyAccount.png'/></a>
                    <a><img className='nav-item' src='Search.png' /></a>
                    <a><img className='nav-item' src='LogOut.png'/></a>
                </div> 
            </nav>
            
        );
    }
}

export default Navbar;