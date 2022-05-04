import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "react-widgets/styles.css";
import Combobox from 'react-widgets/Combobox'
import SearchPageRow from '../Components/Rows/SearchPageRow';
import NavHeader from '../Components/NavHeader/NavHeader';
import { useParams, useHistory } from 'react-router-dom';

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
    // const [languages, setLanguages] = useState([]);
    // const [skillNames, setSkillNames] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    // const [filterValue, setFilterValue] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    let {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch("https://cohort3skillsmatrix.azurewebsites.net/Users/GetAll")
        .then((res) => res.json())
        .then((result) => { 
            setUsers(result);
         },
            (error) => { alert(error); console.log(error); }
        )
        fetch("https://cohort3skillsmatrix.azurewebsites.net/Skills/GetAll")
        .then((res) => res.json())
        .then((result) => { 
            setSkills(result);
         },
            (error) => { alert(error); console.log(error); }
        )  
    }, [])

    useEffect(() => {
        //Get token. If there's no token redirect to landing page
        const token = localStorage.getItem("my_token");

        if(!token){
            history.push('/')
        }
    },)

    
   
    const searchItems = (searchValue) => {
        console.log(searchValue)
        setSearchInput(searchValue)

        let sID = 0
        skills.forEach(skill => {
            if(skill.title.includes(searchValue)){
                sID = skill.skillId
                console.log(skill.skillId)
            }
        });
        console.log(sID);

        if(searchValue !== ''){
            const filteredData = users.filter(item => item.id === sID);
            console.log(filteredData)
            setFilteredResults(filteredData);
            console.log(filteredResults)
        } else {
            setFilteredResults(users);
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
                    
                    <Container className='align-items-center justify-content-center d-flex w-75 p-2'>
                        <Row className='align-items-center justify-content-center w-100'>
                            <Col className='d-flex justify-content-center '>
                                <Combobox 
                                style={{maxWidth:400}}
                                className='w-100 m-1 text-start'
                                placeholder={`Search for skill`}
                                data={skillTitles}
                                data-testid='dropdown'
                                onChange={value => searchItems(value)}/>
                            </Col>                            
                        </Row>       
                    </Container>        
                    <Container data-testid='search-row-container'>
                        {searchInput.length > 1 ? (
                            filteredResults.map((user, index) => {
                                return(
                                    <SearchPageRow 
                                    key={index} 
                                    users={users}
                                    id={id}
                                    userId={user.id}
                                    fullName={user.fullName}
                                    location={user.location}
                                    timeZone={user.timeZone}
                                    jobId={user.jobId}
                                    skillId={user.skillId}
                                    languageId={user.languageId}
                                    />
                                    )
                                })
                        ) : (
                            users.map((user, index) => {
                                return(
                                    <SearchPageRow 
                                    key={index} 
                                    users={users}
                                    id={id}
                                    userId={user.id}
                                    fullName={user.fullName}
                                    location={user.location}
                                    timeZone={user.timeZone}
                                    jobId={user.jobId}
                                    skillId={user.skillId}
                                    languageId={user.languageId}
                                    />
                                    );
                                })
                            )
                        }           
                    </Container>
                </Container>
            </>
        );
    }

