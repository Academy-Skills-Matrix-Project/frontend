import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Rater from '../Rating/Rating';
import './SkillRow.css';
import "react-widgets/styles.css";
import ComboBox from 'react-widgets/Combobox';
import { Rating } from 'react-simple-star-rating';
import { useSSRSafeId } from '@react-aria/ssr';

export default function SkillRow(props) {

    const {skill} = props
    // const [skillTitles, setSkillTitle] = useState();
    const [skills, setSkills] = useState([]);

    const [title, setTitle] = useState(skill.title);
    const [level, setLevel] = useState(0);
    let [sID, setSID] = useState(0);

    const [rating, setRating] = useState(0); // initial rating value
    const handleRating = (rate) => {
        setRating(rate)
      }
    let selectedIdSkillId;
    
    const fetchSkills = async () => {
        await fetch("https://cohort3skillsmatrix.azurewebsites.net/Skills/GetAll")
        .then((res) => res.json())
        .then((result) => { 
            setSkills(result)
         },
            (error) => { alert(error); console.log(error); 
        })
    }

    const setSkillId = (value) => {
        selectedIdSkillId = skills.filter(skill => {
            
            return skill.title === value
              
        });
        console.log(selectedIdSkillId[0].id)
        setSID(selectedIdSkillId[0].id)
        
    }
    useEffect(() => {
        setSID(skill.id)
        fetchSkills()
    }, [])

    let skillTitles;
    if(skills.length > 1){
        skillTitles = (skills.map(skill => skill.title))
    }
        
    return (
        <Container fluid className='position-relative mt-4 bg-light border rounded shadow-sm' data-testid='skill-row-container'>
                <button 
                onClick={() => props.removeSkillRow(skill.id, props.selectedId)}
                className='position-absolute top-0 start-0 translate-middle bg-transparent border-0' >
                    <img  
                        src="/Cancel.png"
                        width={30}
                        alt='delete row'
                        data-testid='delete-button'
                        />
                </button>
                <button onClick={() => {props.handleSave(sID, title, level)}} className=' position-absolute top-0 end-0 translate-middle bg-transparent border-0'>
                    Save
                </button>

            <Row data-testid='skill-row' className='py-1 text-center justify-content-center w-100'>  
                {/* Renders 'I am proficent in' text */}
                <Col lg={3} md={12} xs={12} className='justify-content-center align-items-center' >
                    <h5 className='px-3 pt-2'>I am proficient in...</h5>
                </Col>

                {/* Renders the category dropdown menu and text field */}
                <Col lg={6} xs={6} className='d-flex mx-auto justify-content-center align-items-center'>
                    <ComboBox 
                    className='textfield w-50 mx-1 text-start' 
                    data-testid='skill-text-input'
                    hideEmptyPopup 
                    placeholder={'Find Skill'} 
                    data={skillTitles}
                    value={title}
                    onChange={(value) => {setTitle(value); setSkillId(value);}}
                    />
                </Col>
                <Col lg={3} md={12} xs={12}>
                    {/* <Rater toolTipShown={true} hoverable={true} editable={true} level={skill.level}/> */}
                    <Rating 
                        onClick={(value) => {setLevel((value / 20))}} 
                        ratingValue={rating}
                        fillColor='#FFD700'
                        showTooltip={true}
                        tooltipDefaultText = 'Rate Your Proficiency'
                        tooltipArray={['Novice', 'Beginner', 'Competent', 'Proficient', 'Expert']}
                        initialValue={skill.level}
                        readonly={false}
                        allowHover={true}
                        />
                </Col>       
            </Row>
        </Container>
        );
        
    }