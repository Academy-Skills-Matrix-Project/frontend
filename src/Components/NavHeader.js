import React, {Component} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';



class NavHeader extends Component {

    constructor(props){
        super(props);
            this.state = {
                isLoggedIn: props.isLoggedIn,
               
            }
        };

    render() {
        return(
        <>
            <nav className='navbar navbar-light bg-light'>
            <img className='me-auto' src='SWO_logo.png' width={250} alt = 'SWO_Logo'/>
                <span className='mx-auto'>Welcome to the Skill Matrix</span>
                <div className='ms-auto'>
                    {this.state.isLoggedIn && <a><img className='nav-item' src='MyAccount.png' width={50} alt= 'MyAccount' /></a>}
                    {this.state.isLoggedIn && <a><img className='nav-item' src='Search.png' width={50} alt= 'Search'/></a>}
                    {this.state.isLoggedIn && <a><img className='nav-item' src='LogOut.png' width={50} alt= 'LogOut'/></a>}
                </div>
            </nav>
        </>
            );
        }
    }

export default NavHeader;