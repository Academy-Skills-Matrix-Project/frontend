import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';
import ProfileInfoPage from '../Pages/ProfileInfoPage';

test('NavHeader.js renders NavHeader', () => {
    render(<ProfileInfoPage />);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

test('profile page should be in the DOM', () =>{
    render(<ProfileInfoPage/>);
    const testProfilePage = screen.getByTestId('profile-title');
    expect(testProfilePage).toBeInTheDocument();
})

describe('ProfileInfoPage.js', () => {test('Logo must have src = "/LogOut.png" and alt = "LogOut"', () => {
        render(<ProfileInfoPage/>);
        const logo = screen.getByAltText('LogOut');
        expect(logo).toHaveAttribute('src', 'LogOut.png');
        expect(logo).toHaveAttribute('alt', 'LogOut');
    });
    });

describe('ProfileInfoPage.js', () => {test('Logo must have src = "/Search.png" and alt = "Search"', () => {
        render(<ProfileInfoPage/>);
        const logo = screen.getByAltText('Search');
        expect(logo).toHaveAttribute('src', 'Search.png');
        expect(logo).toHaveAttribute('alt', 'Search');
        });
        });

test('the edit button should be rendered', () => {
    render(<ProfileInfoPage />);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    }) 

test('edit ptofile button can be clicked', () => {
        render(<ProfileInfoPage />);
        const button = screen.getByTestId('button');
        fireEvent.click(button);
        expect(button).toBeEnabled();
        });

test('email heading should be rendered', () => {
    render(<ProfileInfoPage />);
    const emailTitle = screen.getByTestId('email-title');
    expect(emailTitle).toBeInTheDocument();
})

test('email heading should have text Email', () => {
    render(<ProfileInfoPage />);
    const emailTitle = screen.getByTestId('email-title');
    expect(emailTitle).toHaveTextContent('Email:');
})

test('mobile number heading should be rendered', () => {
    render(<ProfileInfoPage />);
    const mobileTitle = screen.getByTestId('mobile-title');
    expect(mobileTitle).toBeInTheDocument();
})

test('mobile number heading should have text Mobile Number', () => {
    render(<ProfileInfoPage />);
    const mobileTitle = screen.getByTestId('mobile-title');
    expect(mobileTitle).toHaveTextContent('Mobile Number:');
})

test('location heading should be rendered', () => {
    render(<ProfileInfoPage />);
    const locationTitle = screen.getByTestId('location-title');
    expect(locationTitle).toBeInTheDocument();
})

test('location heading should have text Location/Time zone', () => {
    render(<ProfileInfoPage />);
    const locationTitle = screen.getByTestId('location-title');
    expect(locationTitle).toHaveTextContent('Location/Time zone:');
})


test('Department heading should be rendered',()=> {
    render(<ProfileInfoPage/>);
    const departmentTitle = screen.getByTestId('department-title');
    expect(departmentTitle).toBeInTheDocument();
})

test('department heading should have the text department', () =>{
    render(<ProfileInfoPage/>);
    const departmentTitle = screen.getByTestId('department-title');
    expect(departmentTitle).toHaveTextContent('Department:');
})

test('Team heading should be rendered',()=> {
    render(<ProfileInfoPage/>);
    const teamTitle = screen.getByTestId('team-title');
    expect(teamTitle).toBeInTheDocument();
})

test('team heading should have the text team', () =>{
    render(<ProfileInfoPage/>);
    const teamTitle = screen.getByTestId('team-title');
    expect(teamTitle).toHaveTextContent('Team:');
})

test('Job title heading should be rendered',()=> {
    render(<ProfileInfoPage/>);
    const jobTitle = screen.getByTestId('job-title');
    expect(jobTitle).toBeInTheDocument();
})

test('Job Title heading should have the text Job Title', () =>{
    render(<ProfileInfoPage/>);
    const jobTitle = screen.getByTestId('job-title');
    expect(jobTitle).toHaveTextContent('Job Title:');
})

test('my profile heading should be rendered',()=> {
    render(<ProfileInfoPage/>);
    const profileTitle = screen.getByTestId('profile-title');
    expect(profileTitle).toBeInTheDocument();
})

test('my profile heading should have the text My Profile', () =>{
    render(<ProfileInfoPage/>);
    const profileTitle = screen.getByTestId('profile-title');
    expect(profileTitle).toHaveTextContent('My Profile');
})

test('full name heading should be rendered',()=> {
    render(<ProfileInfoPage/>);
    const nameTitle = screen.getByTestId('name-title');
    expect(nameTitle).toBeInTheDocument();
})

test('full name heading should have the text Full Name', () =>{
    render(<ProfileInfoPage/>);
    const nameTitle = screen.getByTestId('name-title');
    expect(nameTitle).toHaveTextContent('Full Name');
})


describe('ProfileInfoPage.js', () => {test('img must have src = "/ProfilePic.png" and alt = "Profile Picture"', () => {
        render(<ProfileInfoPage/>);
        const profilePic = screen.getByAltText('Profile Picture');
        expect(profilePic).toHaveAttribute('src', 'ProfilePic.png');
        expect(profilePic).toHaveAttribute('alt', 'Profile Picture');
    });
    });

    
    test('renders Banner onto page', () => {
        render(<ProfileInfoPage/>);
        const banner = screen.getByTestId("banner");
        expect(banner).toBeInTheDocument();
    });
      