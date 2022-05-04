import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
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
    const [value, setValue] = useState('');
    // const [filterValue, setFilterValue] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [skillArray, setSkillArray] = useState([])
    const [languageArray, setLanguageArray] = useState([])
    let {id} = useParams();

    

    useEffect(() => {
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

        let tempSkills = JSON.parse(localStorage.getItem('skills'))
        let tempLanguages = JSON.parse(localStorage.getItem('languages'))
         setSkillArray(tempSkills)
         setLanguageArray(tempLanguages)

         
        fetchUsers();
        fetchSkills();
        fetchLanguages();

        const searchItems = () => {
            let sID = 0;

            skills.forEach(skill => {
                if(skill.title === searchInput){
                    sID = skill.id;
                }
            });
            
            if(searchInput !== ''){
                setFilteredResults(skillArray.filter(item => item.skillId === sID));
                
            } else {
                setFilteredResults(users);
            }
        } 
        searchItems();
    }, [searchInput])
   
    let filteredLanguageArray;
    // let filteredUsers=[];
    if(filteredResults.length > 0){
        filteredLanguageArray = languageArray.filter(item => item.userId === filteredResults[0].userId)
        // filteredUsers = users.filter(el => {
        //     return filteredResults.find(element => {
        //         return element.userId === el.id
        //     })
        // })
    }

        const skillTitles = skills.map(skill => skill.title);
        return (
            <>
                <NavHeader data-testid='navinheader' isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={true} id={id} selectedId={id}/>
                <Container data-testid='container' fluid className='justify-content-center mt-5'>
                    <Row className='text-center'>
                        <h3>Search and Filter Co-Workers</h3>
                    </Row>
                    
                    <Container className='align-items-center justify-content-center d-flex w-75 p-2'>
                        <Row className='align-items-center justify-content-center w-100'>
                            <Col className='d-flex justify-content-center '>
                                <Combobox 
                                style={{maxWidth:400}}
                                className='w-100 m-1 text-start'
                                placeholder={`Search for skill`}
                                data={skillTitles}
                                data-testid='dropdown'
                                value={value}
                                onChange={(value) => setValue()}
                                onSelect={(value) => {
                                    setSearchInput(value); 
                                    }}
                                    />
                            </Col>                            
                        </Row>       
                    </Container>  
                    {(skills.length > 0) && (languages.length > 0) & (users.length > 0) ? (
                    <Container data-testid='search-row-container'>
                        {(searchInput.length > 1) && (filteredResults.length > 0) ? (
                            filteredResults.map((user, index) => {
                                return(
                                    <SearchPageRow 
                                    key={index} 
                                    users={user}
                                    skills={skills}
                                    languages={languages}
                                    skillArray={skillArray}
                                    languageArray={languageArray}
                                    filteredLanguageArray={filteredLanguageArray}
                                    id={id}
                                    userId={user.id}
                                    // fullName={user.fullName}
                                    // location={user.location}
                                    // timeZone={user.timeZone}
                                    // jobId={user.jobId}
                                    // skillId={user.skillId}
                                    // languageId={user.languageId}
                                    />
                                )
                            })
                        ) : (
                            users.map((user, index) => {
                                return(
                                    <SearchPageRow 
                                    key={index} 
                                    users={user}
                                    skills={skills}
                                    languages={languages}
                                    skillArray={skillArray}
                                    languageArray={languageArray}
                                    id={id}
                                    userId={user.id}
                                    // fullName={user.fullName}
                                    // location={user.location}
                                    // timeZone={user.timeZone}
                                    // jobId={user.jobId}
                                    // skillId={user.skillId}
                                    // languageId={user.languageId}
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

