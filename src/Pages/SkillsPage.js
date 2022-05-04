import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CircleButton from '../Components/Button/CircleButton';
import SkillRow from '../Components/Rows/SkillRow';
import SkillsList from '../Components/Rows/SkillsList';


export default function SkillsPage(props) {

    let [skillsArray, setSkillsArray] = useState([]);
    const [tempSkills, setTempSkills] = useState([]);
    const [skills, setSkills] = useState([]);
    const [user, setUser] = useState([]);
    const [selectedId, setSelectedId] = useState(parseInt(props.selectedId));
    let usersSkills
    let [length, setLength] = useState(skillsArray.length)
    
    useEffect(() =>{
        let tempAllSkills = JSON.parse(localStorage.getItem('skills'))
        let tempAllUserSkills = JSON.parse(localStorage.getItem('usersSkills'))
        console.log(tempAllSkills)
        console.log(tempAllUserSkills)
        setSkillsArray(tempAllUserSkills);
        fetchUser();
        setSkills(tempAllSkills);

    if(skills.length > 0){
        usersSkills = skills.filter(skill => skill.userId === user.id)
    }      
    }, [tempSkills])
    
    // const fetchSkills = async () => {
    //         await fetch('https://cohort3skillsmatrix.azurewebsites.net/Skills/GetAll')
    //         .then((res) => res.json())
    //         .then((result) => { 
    //             setSkills(result);
    //         });
    //         }
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
        setTempSkills(temp)
        // let newps = JSON.parse(localStorage.getItem('usersSkills'))
        // let news = JSON.parse(localStorage.getItem('skills'))
        // console.log(newps)
        // console.log(news)
        
    }
    let updatedArray = []
    const handleSave = (id, title, level) => {
        let temp = JSON.parse(localStorage.getItem('usersSkills'))
        console.log(temp)
        console.log(id)
        console.log(level)
        console.log(title)
        temp.forEach(e => {
            if(e.id === 0){
                e.id = id;
                e.title = title;
                e.level = level;
            

            localStorage.setItem('usersSkills', JSON.stringify(temp))
            let tempSkills = JSON.parse(localStorage.getItem('skills'))
            tempSkills.push({userId: selectedId, skillId: id, skillLevel: level})
            localStorage.setItem('skills', JSON.stringify(tempSkills))
                setTempSkills(temp)
            // let newps = JSON.parse(localStorage.getItem('usersSkills'))
            // let news = JSON.parse(localStorage.getItem('skills'))
            // console.log(newps)
            // console.log(news)
            }
        });
    }

    const removeSkillRow = (sid, userId) =>{
        console.log(sid)
        console.log(userId)
        const removedUserSkill = skillsArray.filter(element => element.id !== sid);
        console.log(removedUserSkill)
        setSkillsArray(removedUserSkill)
        localStorage.setItem('usersSkills', JSON.stringify(removedUserSkill))

        const temp = JSON.parse(localStorage.getItem('skills'))
        console.log(temp)
        const removedSkill = temp.filter(t =>{
            return t.skillId !== sid && t.userId !== userId;
        });
            
        console.log(removedSkill)
    
        localStorage.setItem('skills', JSON.stringify(removedSkill))
        setTempSkills(temp)
        let newps = JSON.parse(localStorage.getItem('usersSkills'))
        let news = JSON.parse(localStorage.getItem('skills'))
        console.log(newps)
        console.log(news)
    }
    return(
        <>
            
            <Container fluid className="mt-5">                    
                <Row className='text-center mb-4'>
                    <h3>Soft Skills and Proficiency</h3>
                </Row>

                <Container className='border-bottom border-top border-4 border-dark pb-5'>
                    <SkillsList selectedId={selectedId} skillsArray={skillsArray} removeSkillRow={removeSkillRow} handleSave={handleSave} />
                </Container>

                <Container className='position-relative text-center '>
                    <a onClick={() => addSkillRow()}><img src="/plus.png" /></a>
                </Container>
            </Container>
            
        </>
    );   
    
} 

