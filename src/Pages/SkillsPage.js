import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppButton from '../Components/Button/Button';
import CircleButton from '../Components/Button/CircleButton';
import NavHeader from '../Components/NavHeader/NavHeader';
import SkillRow from '../Components/Rows/SkillRow';
import SkillsList from '../Components/Rows/SkillsList';


export default class SkillsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {skillRows: []}
        console.log(this.state.skillRows)
        this.addSkillRow = this.addSkillRow.bind(this);
        this.removeSkillRow = this.removeSkillRow.bind(this);
    }

    addSkillRow(item){
        {console.log(item)}
        this.setState((prevState) => {
            return{
                skillRows: prevState.skillRows.concat(<SkillRow key={item.key} id={item.id}/>)
            }
        })
    }

    removeSkillRow(id){
        {console.log(id)}
        const skills = this.state.skillRows.filter(element => element.props.id !== id);
        this.setState({skillRows: skills});
    }

    render(){
        return(
            <>
                {/* Renders navbar and passes props to render just logout button */}
                <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={false} />
                <Container fluid>
                    <Row 
                    style={{display:'flex', justifyContent:'left'}}
                    >
                        <h2 className='p-2 fw-bold text-start mb-5'>Personal Information</h2>
                    </Row>
                    <Row className='text-center'>
                        <h1>List and Rank your Work Related Skills</h1>
                    </Row>

                    {/* Renders the row for skill entry */}
                    <Container className='border-bottom border-top border-4 border-dark pb-5'>
                        {/* {row} */}
                        {console.log(this.state.skillRows)}
                        <SkillsList skillRows={this.state.skillRows} removeSkillRow={this.removeSkillRow} />
                    </Container>

                    {/* Renders bottom divider with 'add' button */}
                    <Container className='position-relative text-center '>
                        <CircleButton data-testid='plus-button' addSkillRow={this.addSkillRow} ref={(a) => this._inputElement = a}  />
                    </Container>

                    {/* Renders 'Continue' button */}
                    <Container className='text-center mt-5'>
                        <AppButton title='Continue' page='SkillsPage' />
                    </Container>
                </Container>
            </>
        );   
    }
}

