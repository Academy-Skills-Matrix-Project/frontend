import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';



class NavHeader extends Component {

    constructor(props){
        super(props);
            this.state = {
                isLogoutEnabled: props.isLogoutEnabled,
                isSearchEnabled: props.isSearchEnabled,
                isMyAccountEnabled: props.isMyAccountEnabled,
               
            }
        };

    render() {
        return(
            <Navbar className='navbar' data-testid='navbar'>
                <Container>
                        <Col>
                            <Navbar.Brand>
                                <img src='SWO_logo.png' width={250} alt = 'SWO_Logo'/>
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            {!this.state.isLogoutEnabled && <h1>Welcome to the Skill Matrix</h1>}
                        </Col>
                        <Col>
                            <Nav>
                                <Nav.Link>
                                    {this.state.isMyAccountEnabled && <a className='text-black' href='/' style={{textDecoration:'none'}} ><img className='nav-item' 
                                    src='MyAccount.png' width={50} alt= 'MyAccount' />My Account</a>}
                                </Nav.Link>
                                <Nav.Link>
                                    {this.state.isSearchEnabled && <a className='text-black' href='/' style={{textDecoration:'none'}} ><img className='nav-item' 
                                    src='Search.png'  width={50} alt= 'Search'/>Search</a>}
                                </Nav.Link>
                                <Nav.Link>
                                    {this.state.isLogoutEnabled && <a className='text-black' href='/' style={{textDecoration:'none'}} ><img className='nav-item' 
                                    src='LogOut.png' width={50} alt= 'LogOut'/>Logout</a>}
                                </Nav.Link>
                            </Nav>
                        </Col>
                </Container>  
            </Navbar>
     
            );
        }
    }

export default NavHeader;