import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import LanguageList from '../Components/Rows/LanguagesList';

export default function LanguagesPage(props){

    let [languagesArray, setLanguagesArray] = useState([]);
    const [tempLangs, setTempLangs] = useState();
    const [selectedId] = useState(parseInt(props.selectedId));
    
    useEffect(() =>{
        let tempUsersLangs = JSON.parse(localStorage.getItem('usersLanguages'))
        setLanguagesArray(tempUsersLangs);
        
    }, [tempLangs])

    const addLanguageRow = () =>{
        let temp = JSON.parse(localStorage.getItem('usersLanguages'))
        temp.push({languageId: 0, title: '', level: 0})
        localStorage.setItem('usersLanguages', JSON.stringify(temp));
        setTempLangs(temp)
    }

    const handleSave = (sid, title, level, userId, currentId) => {
        const removedUserLang = languagesArray.filter(element => element.languageId !== currentId);
        setLanguagesArray(removedUserLang)
        localStorage.setItem('usersLanguages', JSON.stringify(removedUserLang))

        const temp = JSON.parse(localStorage.getItem('languages'))
        setTempLangs(temp)
        const removedUser = temp.filter(t =>{
            return t.userId !== userId;
        });
        localStorage.setItem('languages', JSON.stringify(removedUser))
        
        let updateLang = JSON.parse(localStorage.getItem('languages'))
        let updatedTemp = JSON.parse(localStorage.getItem('usersLanguages'));

        updatedTemp.forEach(t => updateLang.push({userId: selectedId, languageId: t.languageId, skillLevel: t.level}))
        localStorage.setItem('languages',JSON.stringify(updateLang))
        setTempLangs(temp)
        
        let a = JSON.parse(localStorage.getItem('usersLanguages'));
        a.push({languageId: sid, title: title, level: level})
        localStorage.setItem('usersLanguages', JSON.stringify(a))
        setTempLangs(temp)

        const updatedUserLang = {userId: selectedId, languageId: sid, skillLevel: level}
        const updatedAllLang = JSON.parse(localStorage.getItem('languages'))

        updatedAllLang.push(updatedUserLang)
        localStorage.setItem('languages',JSON.stringify(updatedAllLang))
        setTempLangs(temp)
    }

    const removeLanguageRow = (sid, userId) =>{
        const removedUserLang = languagesArray.filter(element => element.languageId !== sid);
        setLanguagesArray(removedUserLang)
        localStorage.setItem('usersLanguages', JSON.stringify(removedUserLang))
        
        const temp = JSON.parse(localStorage.getItem('languages'))
        const removedLang = temp.filter(t => {
            return t.userId !== userId;
        })

        localStorage.setItem('languages', JSON.stringify(removedLang))
        setTempLangs(temp)

        let updateLang = JSON.parse(localStorage.getItem('languages'))
        let updatedTemp = JSON.parse(localStorage.getItem('usersLanguages'));
        
        updatedTemp.forEach(t => updateLang.push({userId: selectedId, languageId: t.languageId, skillLevel: t.level}))
        localStorage.setItem('languages',JSON.stringify(updateLang))
    }
    
    
        return (
            <>   
            <Container fluid className="mt-5">                       
                <Row className = 'text-center mb-4'> 
                    <h3>Coding Languages and Proficiency</h3>
                </Row>
                <Container className= 'border-bottom border-top border-4 border-dark pb-5 '>
                        <LanguageList selectedId={selectedId} languagesArray={languagesArray} removeLanguageRow={removeLanguageRow} handleSave={handleSave}/>
                </Container>
                <Container className='position-relative text-center mb-4'>
                    <button onClick={() => addLanguageRow()}  className='position-absolute top-0 start 50 translate-middle border border-2 border-dark bg-light rounded-circle p-2'>
                        <img src="/Plus.png" alt='Add Row' />
                    </button>
                </Container>
            </Container>
            </>
        );
    
    
}