import React, {useState} from 'react';
import NavHeader from '../Components/NavHeader/NavHeader';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "react-widgets/styles.css";
import ComboBox from 'react-widgets/Combobox'
import DropdownList from 'react-widgets/DropdownList'
import SearchPageRow from '../Components/Rows/SearchPageRow';

class SearchPage extends React.Component {

    constructor(props){
        super(props);
        this.getFilterValue = this.getFilterValue.bind(this);
        this.setFilterByValue = this.setFilterByValue.bind(this);
    }
    state = {
        filterByValue: ''
    }

    setFilterByValue = (value) => {
        this.setState({
            filterByValue: value
        })
    }

    getFilterValue = () => {
        return this.state.filterByValue;
    }

    render() {
        return (
            <>
                <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={true} />
                <Container fluid className='justify-content-center'>
                    <Row className='text-center'>
                        <h3>Search and Filter Co-Workers</h3>
                    </Row>
                    
                    <Container className='align-items-center justify-content-center d-flex w-75 p-2'>
                        <Row className='align-items-center justify-content-center w-100'>
                            <Col xl={4} lg={6} xs={12} className='d-flex justify-content-center' >
                                <DropdownList
                                style={{maxWidth:400}}
                                className='m-1 text-start'
                                placeholder='Filter by...'
                                filter={false}
                                onSelect={value => this.setFilterByValue(value)}
                                data={['Name', 'Skill', 'Language', 'Job Title', 'Location/Time Zone']} />    
                            </Col>
                            <Col xl={4} lg={6} xs={12} className='d-flex justify-content-center '>
                                <ComboBox 
                                style={{maxWidth:400}}
                                className='w-100 m-1 text-start'
                                placeholder={`Search for ${this.state.filterByValue}`}
                                data={['React + Bootstrap', 'Java', 'Python', 'C', 'C++', 'C#', 'Ruby', 'Node', 'Go', 'HTML', 'CSS']}/>
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
                    <Container className=''>
                        <SearchPageRow />
                        <SearchPageRow />
                        <SearchPageRow />
                        
                    </Container>
                </Container>
            </>
        );
    }
}
export default SearchPage;
