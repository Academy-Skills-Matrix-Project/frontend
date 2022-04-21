import React from 'react';

export default class CircleButton extends React.Component{

    constructor(props){
        super(props);
        this.state = { skillsCount: 0};
        this.addSkill = this.addSkill.bind(this);
    }
    addSkill(e){
        
            var newItem = {
              id: this.state.skillsCount,
              key: Date.now()
            };

            this.props.addSkillRow(newItem);
            this.state.skillsCount++;
        }
    
render(){
    return(
        <>
            <button><img 
            className=
            'position-absolute top-0 start 50 translate-middle border border-2 border-dark bg-light rounded-circle p-2' 
            src='Plus.png'
            data-testid='circle-button'
            alt='Delete button'
            onClick={this.addSkill} />
            </button>
        </>
            
        
    );
    }
}