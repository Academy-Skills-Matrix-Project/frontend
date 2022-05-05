import React from "react";
import DisplaySkills from './DisplaySkills'
import { render, screen} from "@testing-library/react";

const skill={skillId: 999, title:"test", level: 5}

test('displayskills is rendered', () => {
    render(<DisplaySkills skill={skill}/>);
    const skills = screen.getByTestId('display-skills');
    expect(skills).toBeInTheDocument();
})

