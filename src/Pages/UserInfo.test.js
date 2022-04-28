import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import UserInfo from './UserInfo';
import NavHeader from '../Components/NavHeader/NavHeader';
import LandingForm from './LandingForm';
import { MemoryRouter } from "react-router-dom";

// continue button is clickable
test('continue button can be clicked', () => {
    render(
        <MemoryRouter>
            <UserInfo />
        </MemoryRouter>            
        );
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(button).toBeEnabled();
});

// Logout icon appears when isLogoutEnabled is true
describe('NavHeader.js', () => {test('LogOut icon appears when isLogoutEnabled is true', () => {
    render(<MemoryRouter>
    <NavHeader isLogoutEnabled={true} />
    </MemoryRouter>);
    const signOut = screen.getByAltText('LogOut');
    expect(signOut).toBeInTheDocument();
})
});

// --------------- User can logout successfully
/*
1. User clicks on the sign-out icon
2. User is redirected to the login page
*/
// test('User can logout successfully', () => {
//     render(
//     <MemoryRouter>
//         <NavHeader isLogoutEnabled={true} />
//     </MemoryRouter>
//     );

//     render(
//       <MemoryRouter>
//         <LandingForm />
//       </MemoryRouter>
//     )

//     const signOut = screen.getByAltText('LogOut');

//     fireEvent.click(signOut);

//     const loginPage = screen.getByText(/Sign-In/i);

//     expect(loginPage).toBeInTheDocument();
// })

