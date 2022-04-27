import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "react-widgets/styles.css";
import Combobox from 'react-widgets/Combobox'
import SearchPageRow from '../Components/Rows/SearchPageRow';
import NavHeader from '../Components/NavHeader/NavHeader';
import { useParams } from 'react-router-dom';

class SearchPage extends React.Component {

    constructor(props){
        super(props);      
        this.state = {
            users: [],
            jobs: [],
            skills: [],
            skillNames: [],
            languages: [],
            searchInput: '',
            filterValue: '',
            filteredResults: []
        } 

        
    }

    componentDidMount(){
        fetch("https://cohort3skillsmatrix.azurewebsites.net/Users/GetAll")
        .then((res) => res.json())
        .then((result) => { 
            this.setState({users: result});
            console.log(this.state.users);
         },
            (error) => { alert(error); console.log(error); }
        )
        fetch("https://cohort3skillsmatrix.azurewebsites.net/Skills/GetAll")
        .then((res) => res.json())
        .then((result) => { 
            this.setState({skills: result});
            console.log(this.state.skills);
         },
            (error) => { alert(error); console.log(error); }
        )
        
    }

    searchItems(searchValue){
        console.log(searchValue)
        this.setState({searchInput: searchValue})

        let sID = 0;
        this.state.skills.forEach(skill => {
            if(skill.title.includes(searchValue)){
                sID = skill.skillId
            }
        });
        console.log(sID);

        if(searchValue !== ''){
            const filteredData = this.state.users.filter(item => item.skillId === sID);
            console.log(filteredData)
            this.setState({filteredResults: filteredData});
            console.log(this.state.filteredResults)
        } else {
            this.setState({filteredResults: this.state.users});
        }
        console.log(this.state.filteredResults)
    }  

    render() {

        const { users } = this.state;
       
        const skillTitles = this.state.skills.map(skill => skill.title);
        return (
            <>
                <NavHeader data-testid='navinheader' isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={true}/>
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
                                onChange={value => this.searchItems(value)}/>
                            </Col>                            
                        </Row>       
                    </Container>        
                    <Container data-testid='search-row-container'>
                        {this.state.searchInput.length > 1 ? (
                            this.state.filteredResults.map((user, index) => {
                                return(
                                    <SearchPageRow 
                                    key={index} 
                                    users={users}
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
}
export default SearchPage;
