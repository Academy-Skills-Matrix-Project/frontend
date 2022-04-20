import React from 'react';
import NavHeader from '../Components/NavHeader/NavHeader';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "react-widgets/styles.css";
import ComboBox from 'react-widgets/Combobox'
import DropdownList from 'react-widgets/DropdownList'
import SearchPageRow from '../Components/Rows/SearchPageRow';

class SearchPage extends React.Component {

    constructor(props){
        super(props);
        // this.getFilterValue = this.getFilterValue.bind(this);
        // this.setFilterByValue = this.setFilterByValue.bind(this);
    
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
        
        if(searchValue !== ''){
            const filteredData = this.state.users.filter((item) => {
                return Object.values(item.timeZone).join('').toLowerCase().includes(searchValue.toLowerCase());
            });
            console.log(filteredData)
            this.setState({filteredResults: filteredData});
            console.log(this.state.filteredResults)
        } else {
            this.setState({filteredResults: this.state.users});
        }
        console.log(this.state.filteredResults)
    }
    // state = {
    //     filterByValue: ''
    // }

    // setFilterByValue = (value) => {
    //     this.setState({
    //         filterByValue: value
    //     })
    // }

    // getFilterValue = () => {
    //     return this.state.filterByValue;
    // }



    render() {
        const { users } = this.state;
        const skillTitles = this.state.skills.map(skill => skill.title);
        return (
            <>
                <NavHeader data-testid='navinheader' isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={true} />
                <Container data-testid='container' fluid className='justify-content-center'>
                    <Row className='text-center'>
                        <h3>Search and Filter Co-Workers</h3>
                    </Row>
                    
                    <Container className='align-items-center justify-content-center d-flex w-75 p-2'>
                        <Row className='align-items-center justify-content-center w-100'>
                            {/* <Col xl={4} lg={6} xs={12} className='d-flex justify-content-center' data-testid='col' >
                                <DropdownList
                                style={{maxWidth:400}}
                                className='m-1 text-start'
                                placeholder='Filter by...'
                                filter={false}
                                // onSelect={value => this.setFilterByValue(value)}
                                data={['Name', 'Skill', 'Language', 'Job Title', 'Location/Time Zone']}
                                data-testid='dropdown' />    
                            </Col> */}
                            <Col xl={4} lg={6} xs={12} className='d-flex justify-content-center '>
                                <ComboBox 
                                style={{maxWidth:400}}
                                className='w-100 m-1 text-start'
                                // placeholder={`Search for ${this.state.filterByValue}`}
                                data={skillTitles}
                                data-testid='combobox'
                                onChange={value => this.searchItems(value)}/>
                            </Col>
                            <Col xl={4} lg={12} xs={12} className='w-auto'>
                                <Button
                                className="btn btn-danger m-2" 
                                type="submit" 
                                data-testid="button">
                                Submit
                                </Button>
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
