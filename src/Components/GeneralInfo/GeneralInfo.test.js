import { render, screen } from "@testing-library/react";
import GeneralInfo from "./GeneralInfo";


//test to see if the personal info renders to screen
test('personal informartion is rendered', () => {
    render(<GeneralInfo />);
    const personalInfoText = screen.getByText('Personal Information');
    expect(personalInfoText).toBeInTheDocument();
});

//test to see if page is in the DOM
test('general page should be in the DOM', () => {
    render(<GeneralInfo />);
    const page = screen.getByTestId('general-info');
    expect(page).toBeInTheDocument();
});

//test to see if button is in the DOM
test('the form button should be rendered', () => {
    render(<GeneralInfo />);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
}) 






test('first name text field is in the document', () =>{
    render(<GeneralInfo />);
    const textField = screen.getByPlaceholderText('First Name');
    expect(textField).toBeInTheDocument();
})

//test to see if the last name text field is in the document
/*test('text field should have a label text Last Name', () => {
    render(<GeneralInfo />);
    const textField = screen.getByLabelText('Last Name');
    expect(textField).toHaveTextContent('Last Name');
})*/