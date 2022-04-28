import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CircleButton from '../Components/Button/CircleButton';
import SkillRow from '../Components/Rows/SkillRow';
import SkillsList from '../Components/Rows/SkillsList';


export default class SkillsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {skillRows: [<SkillRow id={0} key={Date.now()}/>]}
        this.addSkillRow = this.addSkillRow.bind(this);
        this.removeSkillRow = this.removeSkillRow.bind(this);
    }

    addSkillRow(item){
        this.setState((prevState) => {
            return{
                skillRows: prevState.skillRows.concat(<SkillRow key={item.key} id={item.id}/>)
            }
        })
    }

    removeSkillRow(id){
        const skills = this.state.skillRows.filter(element => element.props.id !== id);
        this.setState({skillRows: skills});
    }

    render(){
        return(
            <>
                <Container fluid className="mt-5">                    
                    <Row className='text-center mb-4'>
                        <h3>Soft Skills and Proficiency</h3>
                    </Row>

                    {/* Renders the row for skill entry */}
                    <Container className='border-bottom border-top border-4 border-dark pb-5'>
                        {/* {row} */}
                        <SkillsList skillRows={this.state.skillRows} removeSkillRow={this.removeSkillRow} />
                    </Container>

                    {/* Renders bottom divider with 'add' button */}
                    <Container className='position-relative text-center '>
                        <CircleButton data-testid='plus-button' addSkillRow={this.addSkillRow} ref={(a) => this._inputElement = a}  />
                    </Container>
                </Container>
            </>
        );   
    }
}

