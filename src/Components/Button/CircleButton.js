import React from 'react';

export default class CircleButton extends React.Component{

    
    constructor(props){
        super(props);
        let skillsArray = []
        let tempSkills = JSON.parse(localStorage.getItem('usersSkills'));
        skillsArray = tempSkills;
        
        this.addSkill = this.addSkill.bind(this);
    }
    addSkill(e){
            let count = this.state.skillsCount;
            var newItem = {
              id: this.state.skillsCount,
              key: this.state.skillsCount
            };

            this.props.addSkillRow(newItem);
            count++;
            this.setState({skillsCount: count});
        }

    
render(){
    return(
        <>
            <button><img 
            className=
            'position-absolute top-0 start 50 translate-middle border border-2 border-dark bg-light rounded-circle p-2' 
            src='/Plus.png'
            data-testid='circle-button'
            alt='Delete button'
            onClick={this.addSkill} />
            </button>
        </>
    );
    }
}