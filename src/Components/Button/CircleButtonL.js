import React from 'react';

export default class CircleButtonL extends React.Component{

    constructor(props){
        super(props);
        this.state = { languagesCount: 0};
        this.addLanguage = this.addLanguage.bind(this);
    }
    addSkill(e){
        
            var newItem = {
              id: this.state.skillsCount,
              key: Date.now()
            };

            this.props.addSkillRow(newItem);
            this.state.skillsCount++;
        }

    addLanguage(e){

            var newItem = {
                id: this.state.languagesCount,
                key: Date.now()
            };

            this.props.addLanguageRow(newItem);
            this.state.languagesCount++;
    }
    
render(){
    return(
        <>
            <button><img 
            className=
            'position-absolute top-0 start 50 translate-middle border border-2 border-dark bg-light rounded-circle p-2' 
            src='Plus.png'
            data-testid='circle-button-l'
            alt='Delete button'
            onClick={this.addLanguage} />
            </button>
        </>
            
        
    );
    }
}