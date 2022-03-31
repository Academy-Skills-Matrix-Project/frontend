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
        <>
            <Navbar className='navbar navbar-light bg-light' data-testid = 'navbar'>
                <div className="container-fluid">
                    <div>
                        <img className='me-auto' src='SWO_logo.png' width={250} alt = 'SWO_Logo'/>
                    </div>
                    <div className='mx-auto'>
                        {!this.state.isLogoutEnabled && <h3>Welcome to the Skill Matrix</h3>}
                    </div>
                    <div className='ms-auto mx-4 px-4' >
                        {this.state.isMyAccountEnabled && <a className='text-black' href='/' style={{textDecoration:'none'}} ><img className='nav-item' 
                            src='MyAccount.png' width={50} alt= 'MyAccount' />My Account</a>}
                        {this.state.isSearchEnabled && <a className='text-black' href='/' style={{textDecoration:'none'}} ><img className='nav-item' 
                            src='Search.png'  width={50} alt= 'Search'/>Search</a>}
                        {this.state.isLogoutEnabled && <a className='text-black' href='/' style={{textDecoration:'none'}} ><img className='nav-item' 
                            src='LogOut.png' width={50} alt= 'LogOut'/>Logout</a>}
                    </div>
                </div>
            </Navbar>
        </>
            );
        }
    }

export default NavHeader;