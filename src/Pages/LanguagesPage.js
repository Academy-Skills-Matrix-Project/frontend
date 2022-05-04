import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import LanguageRow from '../Components/Rows/LanguageRow';
import LanguageList from '../Components/Rows/LanguagesList';
import CircleButtonL from '../Components/Button/CircleButtonL';

export default function LanguagesPage(props){
    let [languagesArray, setLanguagesArray] = useState([]);
    const [tempLangs, setTempLangs] = useState();
    const [langs, setLangs] = useState([]);
    const [user, setUser] = useState([]);
    const [selectedId, setSelectedId] = useState(parseInt(props.selectedId));
    
    
    useEffect(() =>{
        let temp = JSON.parse(localStorage.getItem('usersLanguages'))
        
        setLanguagesArray(temp);
        fetchUser();
        let usersLangs;
        let tempLangs = JSON.parse(localStorage.getItem('languages'))
        
        setLangs(tempLangs)
        
    if(langs.length > 0){
        
        usersLangs = langs.filter(lang => lang.userId === user.id)
        
    }
    }, [selectedId])

    const fetchUser = async () => {
        await fetch(`https://cohort3skillsmatrix.azurewebsites.net/Users/GetById/${selectedId}`)
        .then((res) => res.json())
        .then((result) => { 
            setUser(result);
        });
        }

    const addLanguageRow = () =>{
        let temp = JSON.parse(localStorage.getItem('usersLanguages'))
        console.log(temp)
        temp.push({id: 0, title: '', level: 0})
        console.log(temp)
        localStorage.setItem('usersLanguages', JSON.stringify(temp));
    }

    const removeLanguageRow = (id) =>{
        const removedLang = languagesArray.filter(element => element.id !== id);
        setLanguagesArray(removedLang)
    }

    const handleSave = (id, title, level) => {
        let temp = JSON.parse(localStorage.getItem('usersLanguages'))
        console.log(temp)
        temp.forEach(e => {
            if(e.id === 0){
                e.id = id;
                e.title = title;
                e.level = level;
                console.log(e)
            }
        });

        localStorage.setItem('usersLanguages', JSON.stringify(temp))
        let tempLangs = JSON.parse(localStorage.getItem('languages'))
        tempLangs.push({userId: selectedId, languageId: id, skillLevel: level})
        localStorage.setItem('languages', JSON.stringify(tempLangs))

        let newps = JSON.parse(localStorage.getItem('usersLanguages'))
        let news = JSON.parse(localStorage.getItem('languages'))
        
        console.log(newps)
        console.log(news)
    }
    
    
        return (
            <>   
                <Container fluid className="mt-5">                       
                    <Row className = 'text-center mb-4'> 
                    <h3>Coding Languages and Proficiency</h3>
                    </Row>
                    <Container className= 'border-bottom border-top border-4 border-dark pb-5 '>
                            <LanguageList languagesArray={languagesArray} removeLanguageRow={removeLanguageRow} handleSave={handleSave}/>
                    </Container>

                    {/* Renders bottom divider with 'add' button */}
                    <Container className='position-relative text-center '>
                        {/* <CircleButtonL data-testid='plus-button' languagesArray={languagesArray} removeLanguageRow={removeLanguageRow} handleSave={handleSave} /> */}
                        <a onClick={() => addLanguageRow()}><img src="/plus.png" /></a>
                    </Container>
                    
                    {/* <Container className='text-center mt-5'>
                        <AppButton title="Save" page="LanguagePage" />
                    </Container> */}
                    
                </Container>
                    
                
            </>
        );
    
    
}