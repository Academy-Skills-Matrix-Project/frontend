import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import "react-widgets/styles.css";
import Combobox from 'react-widgets/Combobox'
import SearchPageRow from '../Components/Rows/SearchPageRow';
import NavHeader from '../Components/NavHeader/NavHeader';
import { useParams } from 'react-router-dom';

export default function SearchPage(props){

    const [users, setUsers] = useState([]);
    // const [jobs, setJobs] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    // const [skillNames, setSkillNames] = useState([]);
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
            await fetch("https://cohort3skillsmatrix.azurewebsites.net/Users/GetAll")
            .then((res) => res.json())
            .then((result) => { 
                setUsers(result);
            },
                (error) => { alert(error); console.log(error); }
            )};

        
    
        const fetchSkills = async () => {
            await fetch("https://cohort3skillsmatrix.azurewebsites.net/Skills/GetAll")
            .then((res) => res.json())
            .then((result) => { 
                setSkills(result);
            },
                (error) => { alert(error); console.log(error); }
            )};
    
        const fetchLanguages = async () => {
            
            await fetch("https://cohort3skillsmatrix.azurewebsites.net/Languages/GetAll")
            .then((res) => res.json())
            .then((result) => { 
                setLanguages(result);
            },
                (error) => { alert(error); console.log(error); }
            )};
        
        fetchUsers();
        fetchSkills();
        fetchLanguages();

    }, [searchInput, filteredResults])

    let t;
    const searchItems = () => {
        
        let sID = 0;
        skills.forEach(skill => {
            if(skill.title === searchInput){
                sID = skill.skillId;
            }
        });
        
        let temp;
        if(searchInput !== ''){
            temp = skillArray.filter(item => item.skillId === sID);
            setFilteredResults(temp)
        } 
        
        let tempUsers = JSON.parse(localStorage.getItem('skills'))
        t = tempUsers.filter(t => t.skillId === sID)
        
        let update = [];
        t.forEach((a) => {
            let com = {}
            com = users.find(s => a.userId === s.userId)
            update.push(com)
        })
        if(update.length > 0){
            setSeachUsers(update)
        } else {
            alert("No users found with that skill")
        }
        
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
                            <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end '>
                                <Combobox 
                                style={{maxWidth:400}}
                                className='w-100 m-1 text-start'
                                placeholder={`Search for skill`}
                                data={skillTitles}
                                data-testid='dropdown'
                                value={searchInput}
                                onChange={(value) => {setSearchInput(value);}}
                                    />
                            </Col>   
                            <Col xs={12} md={3} className='d-flex flex-row justify-content-center justify-content-md-start'>
                                <Button className='bg-danger border border-0 me-1' onClick={(e) => {setSearchInput(e.target.value); searchItems();}}>
                                    Search
                                </Button>
                                <Button className='bg-danger border border-0 ms-1' onClick={() => setSeachUsers([])}>
                                    Reset
                                </Button>
                            </Col>                         
                        </Row>       
                    </Container>  
                    {(skills.length > 0) && (languages.length > 0) & (users.length > 0) ? (
                    <Container data-testid='search-row-container'>
                        {(searchUsers.length > 0) ? (
                            searchUsers.map((user) => {
                                
                                return(
                                    <SearchPageRow 
                                    key={user.userId} 
                                    user={user}
                                    // userId={user.userId}
                                    skills={skills}
                                    languages={languages}
                                    skillArray={skillArray}
                                    languageArray={languageArray}
                                    
                                    id={id}
                                    />
                                )
                            })
                        ) : (
                            users.map((user) => {
                                
                                return(
                                    <SearchPageRow 
                                    key={user.userId} 
                                    user={user}
                                    skills={skills}
                                    languages={languages}
                                    skillArray={skillArray}
                                    languageArray={languageArray}
                                    id={id}
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

