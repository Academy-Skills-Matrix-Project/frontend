import React, {Component} from 'react';
import './NavHeader.css';
import { Navbar, Nav,  Container } from 'react-bootstrap';



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
            <Navbar className='navbar' data-testid='navbar'>    
                <Container fluid>
                    <Navbar.Brand className='navbar-brand'>
                        <img src='SWO_logo.png' width={250} alt = 'SWO_Logo'/>
                    </Navbar.Brand>  
                    <Nav className="d-flex w-auto align-items-center" >
                        
                            {this.state.isMyAccountEnabled && <a className='text-black' href='/' style={{textDecoration:'none'}} ><img className='nav-item' 
                            src='MyAccount.png' width={30} alt= 'MyAccount' />  My Account</a>}
                        
                        
                            {this.state.isSearchEnabled && <a className='text-black' href='/' style={{textDecoration:'none'}} ><img className='nav-item' 
                            src='Search.png'  width={30} alt= 'Search'/>  Search</a>}
                        
                        
                            {this.state.isLogoutEnabled && <a className='text-black' href='/' style={{textDecoration:'none'}} ><img className='nav-item' 
                            src='LogOut.png' width={35} alt= 'LogOut'/>  Logout</a>}
                        
                    </Nav>
                    
                </Container>
                
            </Navbar>

     
            );
        }
    }

export default NavHeader;