import React, {Component} from 'react';
import './NavHeader.css';
import { Navbar, Nav,  Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavHeader extends Component {

    constructor(props){
        super(props);
            //holds props that are passed from the page calling the navbar
            this.state = {
                isLogoutEnabled: props.isLogoutEnabled,
                isSearchEnabled: props.isSearchEnabled,
                isMyAccountEnabled: props.isMyAccountEnabled,
            }
        };


        //renders Navbar
    render() {
         return(
            <Navbar className='navbar sticky-top border-bottom border-dark p-0' data-testid='navbar'>    
                <Container fluid>
                    <Navbar.Brand className='navbar-brand p-0'>
                        <NavLink to="/" className='p-0'> 
                                <img src='SWO_logo.png' 
                                width={250} 
                                alt ='SWO Logo' 
                                data-testid='navbar-swo-logo'/>
                        </NavLink>
                    </Navbar.Brand>  
                    <Nav className="bg-danger d-flex w-auto  align-items-end align-items-sm-start" >
                        {this.state.isMyAccountEnabled && 
                        <NavLink className='bg-primary nav-link text-black p-2' to='/myaccount'>
                            <img className='nav-item' src='MyAccount.png'
                            width={30} alt= 'MyAccount' />  Account</NavLink>}
                    
                        {this.state.isSearchEnabled && 
                        <NavLink className='nav-link text-black p-2' to='/searchpage'>
                           <img className='nav-item' src='Search.png' 
                            width={30} alt= 'Search'/>  Search</NavLink>}
                    
                        {this.state.isLogoutEnabled &&
                        <NavLink className='bg-success nav-link text-black p-2' to="/" >
                            <img className='nav-item' src='LogOut.png'
                            width={30} alt='LogOut'/>  Logout</NavLink>}
                    </Nav>
                </Container>
            </Navbar>
            );
        }
    }

export default NavHeader;