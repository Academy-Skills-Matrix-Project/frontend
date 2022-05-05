import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import "react-widgets/styles.css";
import Combobox from 'react-widgets/Combobox'
import SearchPageRow from '../Components/Rows/SearchPageRow';
import NavHeader from '../Components/NavHeader/NavHeader';
import { useParams } from 'react-router-dom';

export default function SearchPage(props){

    const [users, setUsers] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchUsers, setSeachUsers] = useState([]);
    // const [setValue] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [skillArray, setSkillArray] = useState([])
    const [languageArray, setLanguageArray] = useState([])
    let {id} = useParams();

    

    useEffect(() => {
        let tempSkills = JSON.parse(localStorage.getItem('skills'))
        let tempLanguages = JSON.parse(localStorage.getItem('languages'))
        setSkillArray(tempSkills)
        setLanguageArray(tempLanguages)

        const fetchUsers = async () => {
            console.log('s')
            await fetch("https://cohort3skillsmatrix.azurewebsites.net/Users/GetAll")
            .then((res) => res.json())
            .then((result) => { 
                setUsers(result);
            },
                (error) => { alert(error); console.log(error); }
            )};
    
        const fetchSkills = async () => {
            console.log('q')
            await fetch("https://cohort3skillsmatrix.azurewebsites.net/Skills/GetAll")
            .then((res) => res.json())
            .then((result) => { 
                setSkills(result);
            },
                (error) => { alert(error); console.log(error); }
            )};
    
        const fetchLanguages = async () => {
            console.log('a')
            await fetch("https://cohort3skillsmatrix.azurewebsites.net/Languages/GetAll")
            .then((res) => res.json())
            .then((result) => { 
                setLanguages(result);
            },
                (error) => { alert(error); console.log(error); }
            )};
            
        
console.log(filteredResults)
        
        fetchUsers();
        fetchSkills();
        fetchLanguages();
        // searchItems();
    }, [searchInput, filteredResults])

    const searchItems = () => {
        console.log(searchInput)
        let sID = 0;
        console.log(skills)
        skills.forEach(skill => {
            if(skill.title === searchInput){
                console.log(skill.title)
                sID = skill.skillId;
            }
        });
        console.log(sID)
        console.log(skillArray)
        let temp;
        if(searchInput !== ''){
            temp = skillArray.filter(item => item.skillId === sID);
            console.log(temp)
            setFilteredResults(temp)
        } else {
            alert("Enter something to search")
        }
        console.log(sID)
        console.log(temp)
        let tempUsers = JSON.parse(localStorage.getItem('skills'))
        let t = tempUsers.filter(t => t.skillId === sID)
        setSeachUsers(t)
        console.log(searchUsers)
    } 
   
    let filteredLanguageArray;
    if(filteredResults.length > 0){
        filteredLanguageArray = languageArray.filter(item => item.userId === filteredResults[0].userId)
        
    }

        const skillTitles = skills.map(skill => skill.title);
        return (
            <>
                <NavHeader data-testid='navinheader' isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={true} id={id} selectedId={id}/>
                <Container data-testid='container' fluid className='justify-content-center mt-5'>
                    <Row className='text-center'>
                        <h3>Search and Filter Co-Workers</h3>
                    </Row>
                    
                    <Container data-testid='search-row-container' className='align-items-center justify-content-center d-flex w-75 p-2'>
                        <Row className='align-items-center justify-content-center w-100'>
                            <Col className='d-flex justify-content-center '>
                                <Combobox 
                                style={{maxWidth:400}}
                                className='w-100 m-1 text-start'
                                placeholder={`Search for skill`}
                                data={skillTitles}
                                data-testid='dropdown'
                                value={searchInput}
                                onChange={(value) => {setSearchInput(value);}}
                                // onSelect={(value) => {setSearchInput(value);}}
                                    />
                            </Col>   
                            <Col>
                                <Button onClick={(e) => {setSearchInput(e.target.value); searchItems();}}>
                                    Search
                                </Button>
                            </Col>                         
                        </Row>       
                    </Container>  
                    {(skills.length > 0) && (languages.length > 0) & (users.length > 0) ? (
                    <Container data-testid='search-row-container'>
                        {(searchUsers.length > 0) ? (
                            searchUsers.map((user, index) => {
                                console.log(user)
                                return(
                                    <SearchPageRow 
                                    key={index} 
                                    user={user}
                                    userId={user.userId}
                                    skills={skills}
                                    languages={languages}
                                    skillArray={skillArray}
                                    languageArray={languageArray}
                                    filteredLanguageArray={filteredLanguageArray}
                                    id={id}
                                    />
                                )
                            })
                        ) : (
                            users.map((user, index) => {
                                console.log(user)
                                return(
                                    <SearchPageRow 
                                    key={index} 
                                    user={user}
                                    skills={skills}
                                    languages={languages}
                                    skillArray={skillArray}
                                    languageArray={languageArray}
                                    id={id}
                                    userId={user.userId}
                                    />
                                    );
                                })
                            )
                        }           
                    </Container>
                    ) : (
                    <Container>
                    </Container>   
                    )}  
                </Container>
            </>
        );
    }

