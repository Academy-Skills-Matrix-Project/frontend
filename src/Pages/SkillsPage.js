import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SkillsList from '../Components/Rows/SkillsList';


export default function SkillsPage(props) {

    let [skillsArray, setSkillsArray] = useState([]);
    const [tempSkills, setTempSkills] = useState([]);
    const [selectedId] = useState(parseInt(props.selectedId));
    
    useEffect(() =>{
        let tempAllUserSkills = JSON.parse(localStorage.getItem('usersSkills'))

        setSkillsArray(tempAllUserSkills);
            
    }, [tempSkills])
    
    const addSkillRow = () =>{
        let temp = JSON.parse(localStorage.getItem('usersSkills'))
        temp.push({id: 0, title: '', level: 0})
        localStorage.setItem('usersSkills', JSON.stringify(temp));
        setTempSkills(temp)
    }
    
    const handleSave = (sid, title, level, userId, currentId) => {
        
        const removedUserSkill = skillsArray.filter(element => element.userId !== currentId);
        setSkillsArray(removedUserSkill)
        localStorage.setItem('usersSkills', JSON.stringify(removedUserSkill))

        const temp = JSON.parse(localStorage.getItem('skills'))
        setTempSkills(temp)
        const removedUser = temp.filter(t =>{
            return t.userId !== userId;
        });
        localStorage.setItem('skills', JSON.stringify(removedUser))
        

        let updateSkill = JSON.parse(localStorage.getItem('skills'))
        let updatedTemp = JSON.parse(localStorage.getItem('usersSkills'));
        console.log(updateSkill)
        updatedTemp.forEach(t => updateSkill.push({userId: selectedId, skillId: t.id, skillLevel: t.level}))
        localStorage.setItem('skills',JSON.stringify(updateSkill))
        setTempSkills(temp)

        let a = JSON.parse(localStorage.getItem('usersSkills'));
        a.push({id: sid, title: title, level: level})
        localStorage.setItem('usersSkills', JSON.stringify(a))
        setTempSkills(temp)

        const updatedUserSkills = {userId: selectedId, skillId: sid, skillLevel: level}
        const updatedAllSkills = JSON.parse(localStorage.getItem('skills'))

        console.log(updatedAllSkills)
        console.log(a)
        updatedAllSkills.push(updatedUserSkills)
        localStorage.setItem('skills',JSON.stringify(updatedAllSkills))
        setTempSkills(temp)
    
    }

    const removeSkillRow = (sid, userId) =>{
        console.log(sid)
        console.log(userId)
        const removedUserSkill = skillsArray.filter(element => element.skillId !== sid);
        
        setSkillsArray(removedUserSkill)
        localStorage.setItem('usersSkills', JSON.stringify(removedUserSkill))

        const temp = JSON.parse(localStorage.getItem('skills'))
        console.log(temp)
        const removedSkill = temp.filter(t =>{
            return t.userId !== userId;
        });
            
        localStorage.setItem('skills', JSON.stringify(removedSkill))
        setTempSkills(temp)
        
        let updateSkill = JSON.parse(localStorage.getItem('skills'))
        let updatedTemp = JSON.parse(localStorage.getItem('usersSkills'));
        
        updatedTemp.forEach(t => updateSkill.push({userId: selectedId, skillId: t.id, skillLevel: t.level}))
        localStorage.setItem('skills',JSON.stringify(updateSkill))
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

                <Container className='position-relative text-center mb-4'>
                    <button onClick={() => addSkillRow()} className='position-absolute top-0 start 50 translate-middle border border-2 border-dark bg-light rounded-circle p-2'>
                        <img src="/plus.png" alt='Add Row' />
                    </button>
                </Container>
            </Container>
            
        </>
    );   
    
} 

