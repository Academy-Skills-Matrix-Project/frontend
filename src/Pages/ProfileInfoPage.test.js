import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfileInfoPage from '../Pages/ProfileInfoPage';
import { MemoryRouter } from 'react-router-dom';
import NavHeader from '../Components/NavHeader/NavHeader'

test('NavHeader.js renders NavHeader', () => {
    render(<MemoryRouter>
        <ProfileInfoPage />
        </MemoryRouter>);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

test('profile page should be in the DOM', () =>{
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const testProfilePage = screen.getByTestId('profile-title');
    expect(testProfilePage).toBeInTheDocument();
})

describe('ProfileInfoPage.js', () => {test('Logo must have src = "/LogOut.png" and alt = "LogOut"', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
        const logo = screen.getByAltText('LogOut');
        expect(logo).toHaveAttribute('src', 'LogOut.png');
        expect(logo).toHaveAttribute('alt', 'LogOut');
    });
    });

describe('ProfileInfoPage', () => {test('Logo must have src = "/Search.png" and alt = "Search"', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
        const logo = screen.getByAltText('Search');
        expect(logo).toHaveAttribute('src', 'Search.png');
        expect(logo).toHaveAttribute('alt', 'Search');
        });
        });

test('the edit button should be rendered', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    }) 

test('edit profile button can be clicked', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
        const button = screen.getByTestId('button');
        fireEvent.click(button);
        expect(button).toBeEnabled();
        });

test('email heading should be rendered', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const emailTitle = screen.getByTestId('email-title');
    expect(emailTitle).toBeInTheDocument();
})

test('email heading should have text Email', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const emailTitle = screen.getByTestId('email-title');
    expect(emailTitle).toHaveTextContent('Email:');
})

test('mobile number heading should be rendered', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const mobileTitle = screen.getByTestId('mobile-title');
    expect(mobileTitle).toBeInTheDocument();
})

test('mobile number heading should have text Mobile Number', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const mobileTitle = screen.getByTestId('mobile-title');
    expect(mobileTitle).toHaveTextContent('Mobile Number:');
})

test('location heading should be rendered', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const locationTitle = screen.getByTestId('location-title');
    expect(locationTitle).toBeInTheDocument();
})

test('location heading should have text Location/Time zone', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const locationTitle = screen.getByTestId('location-title');
    expect(locationTitle).toHaveTextContent('Location/Time zone:');
})


test('Department heading should be rendered',()=> {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const departmentTitle = screen.getByTestId('department-title');
    expect(departmentTitle).toBeInTheDocument();
})

test('department heading should have the text department', () =>{
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const departmentTitle = screen.getByTestId('department-title');
    expect(departmentTitle).toHaveTextContent('Department:');
})

test('Team heading should be rendered',()=> {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const teamTitle = screen.getByTestId('team-title');
    expect(teamTitle).toBeInTheDocument();
})

test('team heading should have the text team', () =>{
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const teamTitle = screen.getByTestId('team-title');
    expect(teamTitle).toHaveTextContent('Team:');
})

test('Job title heading should be rendered',()=> {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const jobTitle = screen.getByTestId('job-title');
    expect(jobTitle).toBeInTheDocument();
})

test('Job Title heading should have the text Job Title', () =>{
        render(
            <MemoryRouter>
                <ProfileInfoPage />
            </MemoryRouter>);
    const jobTitle = screen.getByTestId('job-title');
    expect(jobTitle).toHaveTextContent('Job Title:');
})

test('my profile heading should be rendered',()=> {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const profileTitle = screen.getByTestId('profile-title');
    expect(profileTitle).toBeInTheDocument();
})

test('my profile heading should have the text My Profile', () =>{
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const profileTitle = screen.getByTestId('profile-title');
    expect(profileTitle).toHaveTextContent('My Profile');
})

test('full name heading should be rendered',()=> {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const nameTitle = screen.getByTestId('name-title');
    expect(nameTitle).toBeInTheDocument();
})

test('full name heading should have the text Full Name', () =>{
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const nameTitle = screen.getByTestId('name-title');
    expect(nameTitle).toHaveTextContent('Full Name');
})


test('img must have src = "/ProfilePic.png" and alt = "Profile"', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
        const profilePic = screen.getByAltText('Profile');
        expect(profilePic).toHaveAttribute('src', 'ProfilePic.png');
        expect(profilePic).toHaveAttribute('alt', 'Profile');
    });

test('renders Banner onto page', () => {
    render(
        <MemoryRouter>
            <ProfileInfoPage />
        </MemoryRouter>);
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
});
      
