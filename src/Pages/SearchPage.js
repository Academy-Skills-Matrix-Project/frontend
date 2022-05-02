import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "react-widgets/styles.css";
import Combobox from 'react-widgets/Combobox'
import SearchPageRow from '../Components/Rows/SearchPageRow';
import NavHeader from '../Components/NavHeader/NavHeader';
import { useParams } from 'react-router-dom';

export default function SearchPage(props){

    // constructor(props){
    //     super(props);      
    //     this.state = {
    //         users: [],
    //         jobs: [],
    //         skills: [],
    //         skillNames: [],
    //         languages: [],
    //         searchInput: '',
    //         filterValue: '',
    //         filteredResults: []
    //     } 
    // }

    const [users, setUsers] = useState([]);
    // const [jobs, setJobs] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    // const [skillNames, setSkillNames] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [value, setValue] = useState('');
    // const [filterValue, setFilterValue] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    let {id} = useParams();

    let skillArray = [
        {userId: 1, skillId: 1, skillLevel: 5}, {userId: 1, skillId: 4, skillLevel: 5}, {userId: 1, skillId: 20, skillLevel: 3}, 
        {userId: 2, skillId: 4, skillLevel: 5}, {userId: 2, skillId: 26, skillLevel: 3},
        {userId: 3, skillId: 18, skillLevel: 3}, {userId: 3, skillId: 21, skillLevel: 2}, {userId: 3, skillId: 4, skillLevel: 4}, {userId: 3, skillId: 16, skillLevel: 5},
        {userId: 4, skillId: 7, skillLevel: 5}, {userId: 4, skillId: 33, skillLevel: 4},
        {userId: 5, skillId: 1, skillLevel: 4}, {userId: 5, skillId: 100, skillLevel: 5}, {userId: 5, skillId: 18, skillLevel: 3},
        {userId: 6, skillId: 42, skillLevel: 3}, {userId: 6, skillId: 268, skillLevel: 3}, {userId: 6, skillId: 77, skillLevel: 4},
        {userId: 7, skillId: 43, skillLevel: 5}, {userId: 7, skillId: 88, skillLevel: 5}, {userId: 7, skillId: 21, skillLevel: 4},
        {userId: 8, skillId: 1, skillLevel: 1}, {userId: 8, skillId: 32, skillLevel: 4}, {userId: 8, skillId: 33, skillLevel: 5},
        {userId: 9, skillId: 45, skillLevel: 3}, {userId: 9, skillId: 34, skillLevel: 1}, {userId: 9, skillId: 25, skillLevel: 2},
        {userId: 10, skillId: 46, skillLevel: 2}, {userId: 10, skillId: 84, skillLevel: 4}, {userId: 10, skillId: 74, skillLevel: 5},
        {userId: 11, skillId: 47, skillLevel: 5}, {userId: 11, skillId: 152, skillLevel: 2}, {userId: 11, skillId: 142, skillLevel: 4},
        {userId: 12, skillId: 48, skillLevel: 1}, {userId: 12, skillId: 56, skillLevel: 3}, {userId: 12, skillId: 92, skillLevel: 3},
        {userId: 13, skillId: 49, skillLevel: 4}, {userId: 13, skillId: 1, skillLevel: 4}, {userId: 13, skillId: 205, skillLevel: 4},
        {userId: 14, skillId: 40, skillLevel: 4}, {userId: 14, skillId: 207, skillLevel: 2}, {userId: 14, skillId: 202, skillLevel: 4},
        {userId: 15, skillId: 14, skillLevel: 5}, {userId: 15, skillId: 81, skillLevel: 3}, {userId: 15, skillId: 87, skillLevel: 4},
        {userId: 16, skillId: 24, skillLevel: 2}, {userId: 16, skillId: 407, skillLevel: 4}, {userId: 16, skillId: 423, skillLevel: 5},
        {userId: 17, skillId: 34, skillLevel: 3}, {userId: 17, skillId: 390, skillLevel: 2}, {userId: 17, skillId: 444, skillLevel: 4},
        {userId: 18, skillId: 44, skillLevel: 4}, {userId: 18, skillId: 283, skillLevel: 2}, {userId: 18, skillId: 391, skillLevel: 3},
        {userId: 19, skillId: 54, skillLevel: 5}, {userId: 19, skillId: 111, skillLevel: 1}, {userId: 19, skillId: 201, skillLevel: 3},
        {userId: 20, skillId: 64, skillLevel: 1}, {userId: 20, skillId: 65, skillLevel: 2}, {userId: 20, skillId: 56, skillLevel: 4},
        {userId: 21, skillId: 74, skillLevel: 4}, {userId: 21, skillId: 71, skillLevel: 45}, {userId: 21, skillId: 205, skillLevel: 4},
    ]

    let languageArray = [
        {userId: 1, languageId: 1, skillLevel: 3}, {userId: 1, languageId: 7, skillLevel: 4}, {userId: 1, languageId: 3, skillLevel: 3},
        {userId: 2, languageId: 5, skillLevel: 4}, {userId: 2, languageId: 11, skillLevel: 1}, {userId: 2, languageId: 12, skillLevel: 2}, {userId: 2, languageId: 13, skillLevel: 3},
        {userId: 3, languageId: 2, skillLevel: 2}, {userId: 3, languageId: 12, skillLevel: 4},
        {userId: 4, languageId: 4, skillLevel: 4}, {userId: 4, languageId: 7, skillLevel: 3}, {userId: 4, languageId: 17, skillLevel: 3},
        {userId: 5, languageId: 3, skillLevel: 1},
        {userId: 6, languageId: 8, skillLevel: 2},
        {userId: 7, languageId: 10, skillLevel: 4},
        {userId: 8, languageId: 11, skillLevel: 2},
        {userId: 9, languageId: 12, skillLevel: 3},
        {userId: 10, languageId: 13, skillLevel: 4},
        {userId: 11, languageId: 14, skillLevel: 4},
        {userId: 12, languageId: 15, skillLevel: 2},
        {userId: 13, languageId: 16, skillLevel: 3},
        {userId: 14, languageId: 17, skillLevel: 4},
        {userId: 15, languageId: 18, skillLevel: 5},
        {userId: 16, languageId: 9, skillLevel: 2},
        {userId: 17, languageId: 19, skillLevel: 3},
        {userId: 18, languageId: 17, skillLevel: 3},
        {userId: 19, languageId: 1, skillLevel: 2},
        {userId: 20, languageId: 9, skillLevel: 4},
        {userId: 21, languageId: 7, skillLevel: 1},
    ]
    localStorage.setItem('skills', JSON.stringify(skillArray));
    localStorage.setItem('languages', JSON.stringify(languageArray));

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

        fetchUsers();
        fetchSkills();
        fetchLanguages();

        const searchItems = () => {
            
            console.log(searchInput)
            let sID = 0;
            skills.forEach(skill => {
                if(skill.title === searchInput){
                    sID = skill.id;
                }
            });
            console.log(sID);
            console.log(searchInput);
            if(searchInput !== ''){
                setFilteredResults(skillArray.filter(item => item.skillId === sID));
                
            } else {
                setFilteredResults(users);
            }
        } 
        searchItems();
    }, [searchInput])
   
    console.log(filteredResults)
    console.log(users)
    let filteredLanguageArray;
    let filteredUsers=[];
    if(filteredResults.length > 0){
        filteredLanguageArray = languageArray.filter(item => item.userId === filteredResults[0].userId)
        filteredUsers = users.filter(el => {
            return filteredResults.find(element => {
                return element.userId === el.id
            })
        })
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

