import React from "react";
import DisplaySkills from './DisplaySkills'
import { render, screen} from "@testing-library/react";



test('displayskills is rendered', () => {
    render(<DisplaySkills/>);
    const skills = screen.getByTestId('display-skills');
    expect(skills).toBeInTheDocument();
})

