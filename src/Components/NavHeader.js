import React, {Component} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const NavHeader = () => {
   return(
        // <>
        //     <Navbar bg ='light'>
        //     <Container>   
        //         <Navbar.Brand className ='justify-content-start'>
        //              <img  src='SWO_logo.png' width={300} />
        //         </Navbar.Brand>
        //         <Navbar.Text className='justify-content-center'>
        //             Welcome to the Skill Matrix
        //         </Navbar.Text>
        //         <div className='justify-content-end'>
                
        //             <a><img  src='MyAccount.png' width={50}/></a>
        //             <a><img  src='Search.png' width={50}/></a>
        //             <a><img  src='LogOut.png' width={50}/></a>
                
        //         </div>
        //         </Container> 
        //     </Navbar>
        // </>
        <>
           <nav className='navbar navbar-light bg-light'>
           <img className='me-auto' src='SWO_logo.png' width={250} alt = 'SWO_Logo'/>
                <span className='mx-auto'>Welcome to the Skill Matrix</span>
                <div className='ms-auto'>
                    <a><img className='nav-item' src='MyAccount.png' width={50} alt= 'MyAccount' /></a>
                    <a><img className='nav-item' src='Search.png' width={50} alt= 'Search'/></a>
                    <a><img className='nav-item' src='LogOut.png' width={50} alt= 'LogOut'/></a>
                </div>
           </nav>
        </>
        );
    }


export default NavHeader;