import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import UserInfo from './UserInfo';
import NavHeader from '../Components/NavHeader/NavHeader';
import LandingForm from './LandingForm';
import { MemoryRouter } from "react-router-dom";

    let tempSkills = [{userId: 1, skillId: 2, skillLevel: 1}, {userId: 2, skillId: 3, skillLevel: 2}]
    let tempLangs = [{userId: 1, LanguageId: 2, skillLevel: 1}, {userId: 2, LanguageId: 3, skillLevel: 2}]
    let skills = [{id: 1}, {id:2}]
    let languages = [{id: 1}, {id: 2}]
    let selectedId = 1
// continue button is clickable
// test('continue button can be clicked', () => {
//     render(
//         <MemoryRouter>
//             <UserInfo skillsArray={tempSkills} languagesArray={tempLangs} skills={skills} languages={languages} selectedId={selectedId} />
//         </MemoryRouter>            
//         );
//     const button = screen.getByTestId('button');
//     fireEvent.click(button);
//     expect(button).toBeEnabled();
// });

// Logout icon appears when isLogoutEnabled is true
describe('NavHeader.js', () => {test('LogOut icon appears when isLogoutEnabled is true', () => {
    render(<MemoryRouter>
    <NavHeader isLogoutEnabled={true}  />
    </MemoryRouter>);
    const signOut = screen.getByAltText('LogOut');
    expect(signOut).toBeInTheDocument();
})
});


