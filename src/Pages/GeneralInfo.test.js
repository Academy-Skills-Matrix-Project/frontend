import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import GeneralInfo from '../Pages/GeneralInfo';



//test to see if general information page is rendered
test('general page should be in the DOM', () => {
    render(<GeneralInfo />);
    const page = screen.getByTestId('general-info');
    expect(page).toBeInTheDocument();
})

//test to see if the personal info renders to screen
test('personal information is rendered', () => {
    render(<GeneralInfo />);
    const personalInfoText = screen.getByText('Personal Information');
    expect(personalInfoText).toBeInTheDocument();
})

//test to see if page heading has text Personal Information
test('should have text Personal Information', () => {
    render(<GeneralInfo />);
    const headingText = screen.getByText('Personal Information');
    expect(headingText).toHaveTextContent('Personal Information');
})

//test to see if page has a first name field
test('first name text field is in the document', () =>{
    render(<GeneralInfo />);
    const textField = screen.getByPlaceholderText('Enter First Name');
    expect(textField).toBeInTheDocument();
})

//test to see if first name field label has text First Name
test('should have label text First Name', () => {
    render(<GeneralInfo />);
    const labelText = screen.getByTestId('fName-label');
    expect(labelText).toHaveTextContent('First Name');
})

//test to see if the heading Name is rendered
test('heading Name is rendered', () => {
    render(<GeneralInfo />);
    const heading = screen.getByText('Name');
    expect(heading).toBeInTheDocument();
})

//test to see if the heading has text Name
test('heading should have text Name', () => {
    render(<GeneralInfo />);
    const heading = screen.getByText('Name');
    expect(heading).toHaveTextContent('Name');
})

//test to see if page has a last name field
test('last name text field is in the document', () =>{
    render(<GeneralInfo />);
    const textField = screen.getByPlaceholderText('Enter Last Name');
    expect(textField).toBeInTheDocument();
})

//test to see if last name field label has text Last Name
test('should have label text Last Name', () => {
    render(<GeneralInfo />);
    const labelText = screen.getByTestId('lName-label');
    expect(labelText).toHaveTextContent('Last Name');
})

//test to see if the heading Job is rendered
test('heading Job is rendered', () => {
    render(<GeneralInfo />);
    const heading = screen.getByText('Job');
    expect(heading).toBeInTheDocument();
})

//test to see if the heading has text Job
test('heading should have text Job', () => {
    render(<GeneralInfo />);
    const heading = screen.getByText('Job');
    expect(heading).toHaveTextContent('Job');
})

//test to see if page has a job title field
test('job title text field is in the document', () =>{
    render(<GeneralInfo />);
    const textField = screen.getByPlaceholderText('Enter Job Title');
    expect(textField).toBeInTheDocument();
})

//test to see if job title input field label has text Job Title
test('should have label text Job Title', () => {
    render(<GeneralInfo />);
    const labelText = screen.getByTestId('jTitle-label');
    expect(labelText).toHaveTextContent('Job Title');
})

//test to see if page has a department field
test('department text field is in the document', () =>{
    render(<GeneralInfo />);
    const textField = screen.getByPlaceholderText('Enter Department');
    expect(textField).toBeInTheDocument();
})

//test to see if department input field label has text Department
test('should have label text Department', () => {
    render(<GeneralInfo />);
    const labelText = screen.getByTestId('dTitle-label');
    expect(labelText).toHaveTextContent('Department');
})

//test to see if page has a department field
test('team text field is in the document', () =>{
    render(<GeneralInfo />);
    const textField = screen.getByPlaceholderText('Enter Team Name');
    expect(textField).toBeInTheDocument();
})

//test to see if department input field label has text Department
test('should have label text Team', () => {
    render(<GeneralInfo />);
    const labelText = screen.getByTestId('tTitle-label');
    expect(labelText).toHaveTextContent('Team');
})

//test to see if page has a location/time zone field
test('location text field is in the document', () =>{
    render(<GeneralInfo />);
    const textField = screen.getByTestId('lTitle-label');
    expect(textField).toBeInTheDocument();
})

//test to see if department input field label has text Department
test('should have label text Location/Time zone', () => {
    render(<GeneralInfo />);
    const labelText = screen.getByTestId('lTitle-label');
    expect(labelText).toHaveTextContent('Location/Time Zone');
})

//test to see if button is in the DOM
test('the form button should be rendered', () => {
    render(<GeneralInfo />);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
}) 

//test to see if page has a email field
test('Email text field is in the document', () =>{
    render(<GeneralInfo />);
    const emailField = screen.getByPlaceholderText('@softwareone.com');
    expect(emailField).toBeInTheDocument();
})

//test to see if email field label has text Email
test('should have label text Email', () => {
    render(<GeneralInfo />);
    const labelText = screen.getByTestId('email-Label');
    expect(labelText).toHaveTextContent('Email');
})

//test to see if page has a Mobile number field
test('Mobile number text field is in the document', () =>{
    render(<GeneralInfo />);
    const mNumberField = screen.getByPlaceholderText('Enter Phone #');
    expect(mNumberField).toBeInTheDocument();
})

//test to see if mobile number field label has text Mobile number
test('should have label text Mobile Number', () => {
    render(<GeneralInfo />);
    const labelText = screen.getByTestId('mNumber-label');
    expect(labelText).toHaveTextContent('Mobile Number');
})


test('Contact Information h2 is rendered', () => {
    render(<GeneralInfo />);
    const contactInfoText = screen.getByText('Contact Information');
    expect(contactInfoText).toBeInTheDocument();
})

test('About Me h2 is rendered', () => {
    render(<GeneralInfo />);
    const aboutMeText = screen.getByText('About Me');
    expect(aboutMeText).toBeInTheDocument();
})

test('about text area should be in the document', () =>{
    render(<GeneralInfo />);
    const aboutTextArea = screen.getByPlaceholderText('Tell us about yourself!!');
    expect(aboutTextArea).toBeInTheDocument();
})

// continue button is clickable
test('continue button can be clicked', () => {
    render(<GeneralInfo />);
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(button).toBeEnabled();
});