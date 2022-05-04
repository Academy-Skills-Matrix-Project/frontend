import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CircleButton from '../Components/Button/CircleButton';
import SkillRow from '../Components/Rows/SkillRow';
import SkillsList from '../Components/Rows/SkillsList';


export default function SkillsPage(props) {

    let [skillsArray, setSkillsArray] = useState([]);
    let [usersSkills, setUsersSkills] = useState([]);
    const [tempSkills, setTempSkills] = useState();
    const [skills, setSkills] = useState([]);
    const [user, setUser] = useState([]);
    const [selectedId, setSelectedId] = useState(parseInt(props.selectedId));
    console.log(selectedId)
    let updatedSkills;
    let updatedUserSkills;
    useEffect(() =>{
        let temp = JSON.parse(localStorage.getItem('usersSkills'))
        console.log(temp)
        setSkillsArray(temp);
            fetchSkills();
            
    }, [selectedId])
    
    const fetchSkills = async () => {
            await fetch('https://cohort3skillsmatrix.azurewebsites.net/Skills/GetAll')
            .then((res) => res.json())
            .then((result) => { 
                setSkills(result);
            });
            }
    const fetchUser = async () => {
        await fetch(`https://cohort3skillsmatrix.azurewebsites.net/Users/GetById/${selectedId}`)
        .then((res) => res.json())
        .then((result) => { 
            setUser(result);
        });
        }
    
    const addSkillRow = () =>{
        let temp = JSON.parse(localStorage.getItem('usersSkills'))
        console.log(temp)
        temp.push({id: 0, title: '', level: 0})
        console.log(temp)
        localStorage.setItem('usersSkills', JSON.stringify(temp));
        
    }
    let updatedArray = []
    const handleSave = (id, title, level) => {
        let temp = JSON.parse(localStorage.getItem('usersSkills'))
        console.log(temp)
        temp.forEach(e => {
            if(e.id === 0){
                e.id = id;
                e.title = title;
                e.level = level;
                console.log(e)
            }
        });

        // temp.push({id: id, title: title, level: level})
        // console.log(temp)
        localStorage.setItem('usersSkills', JSON.stringify(temp))
        let tempSkills = JSON.parse(localStorage.getItem('skills'))
        tempSkills.push({userId: selectedId, skillId: id, skillLevel: level})
        localStorage.setItem('skills', JSON.stringify(tempSkills))

        let newps = JSON.parse(localStorage.getItem('usersSkills'))
        let news = JSON.parse(localStorage.getItem('skills'))
        console.log(newps)
        console.log(news)
    }

    const removeSkillRow = (id) =>{
        const removedSkill = skillsArray.filter(element => element.id !== id);
        setSkillsArray(removedSkill)
    }

    return(
        <>
            
            <Container fluid className="mt-5">                    
                <Row className='text-center mb-4'>
                    <h3>Soft Skills and Proficiency</h3>
                </Row>

                {/* Renders the row for skill entry */}
                <Container className='border-bottom border-top border-4 border-dark pb-5'>
                    {/* {row} */}
                    <SkillsList skillsArray={skillsArray} removeSkillRow={removeSkillRow} handleSave={handleSave} />
                </Container>

                {/* Renders bottom divider with 'add' button */}
                <Container className='position-relative text-center '>
                    {/* <CircleButton data-testid='plus-button' addSkillRow={addSkillRow} ref={(a) => this._inputElement = a}  /> */}
                    {/* <CircleButton data-testid='plus-button' addSkillRow={addSkillRow} /> */}
                    <a onClick={() => addSkillRow()}><img src="/plus.png" /></a>
                </Container>
            </Container>
            
        </>
    );   
    
} 

