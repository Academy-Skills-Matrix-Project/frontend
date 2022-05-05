import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './SkillRow.css';
import "react-widgets/styles.css";
import ComboBox from 'react-widgets/Combobox';
import { Rating } from 'react-simple-star-rating';

export default function LanguageRow(props) {
    
    const {language} = props
    const [languages, setLanguages] = useState([]);
    const [editable, setEditable] = useState(false)
    const [title, setTitle] = useState(language.title);
    const [level, setLevel] = useState(language.level);
    let [sID, setSID] = useState(0);
    const [rating] = useState(0);
    
    let selectedIdLanguageId;
    
    const fetchLanguages = async () => {
        await fetch("https://cohort3skillsmatrix.azurewebsites.net/Languages/GetAll")
        .then((res) => res.json())
        .then((result) => { 
            setLanguages(result)
         },
            (error) => { alert(error); console.log(error); 
        })
    }

    const setLanguageId = (value) => {
        selectedIdLanguageId = languages.filter(lang => {
            return lang.title === value
        });
        
        setSID(selectedIdLanguageId[0].languageId)
    }

    useEffect(() => {
        setSID(language.languageId)
         fetchLanguages()
    }, [language.languageId])

    let languageTitles;
    if(languages.length > 1){
        languageTitles = (languages.map(lang => lang.title))
    }
    return (
        <Container fluid className='position-relative mt-4 bg-light border rounded shadow-sm ' data-testid='language-row'>
                <button 
                onClick={() => props.removeLanguageRow(language.languageId, props.selectedId)}
                className= ' position-absolute top-0 start-0 translate-middle bg-transparent border-0 '>
                    <img  
                        src="/Cancel.png"
                        width={30}
                        alt='delete row'
                        data-testid='delete-button'
                        />
                </button>
                {editable ? (
                    <button onClick={() => 
                        {setEditable(false); ((title !== '' && level !== 0 ) ? props.handleSave(sID, title, level, props.selectedId, language.languageId) : alert("Make sure Skill and Level are selected"))}}
                    className=' position-absolute top-0 start-100 translate-middle bg-transparent border-0'>
                        <img src='/Save.png' width={30} alt='Save' />
                    </button>
                ) : (
                    <button onClick={() => {setEditable(true)}} className=' position-absolute top-0 start-100 translate-middle bg-transparent border-0'>
                        <img src='/Edit.png' width={30} alt='Edit' />
                    </button>
                )}
                
                <Row data-testid='skill-row' className='py-1 text-center justify-content-center w-100'>
                    <Col lg={3} md={12} xs={12} className='justify-content-center align-items-center' >
                        <h5 className='px-3 pt-2'>I am proficient in...</h5>
                    </Col>
                    <Col lg={6} xs={6} className='d-flex mx-auto justify-content-center align-items-center'>
                        <ComboBox 
                        className='textfield w-50 mx-1 text-start' 
                        data-testid='language-text-input'
                        hideEmptyPopup 
                        placeholder={'Find Language'}
                        data={languageTitles}
                        value={title}
                        readOnly={!editable}
                        onChange={(value) => {setTitle(value); setLanguageId(value);}}
                        />
                    </Col>
                    {/* Renders star rating item */}
                    <Col lg={3} md={12} xs={12}>
                    <Rating 
                        onClick={(value) => setLevel((value / 20))} 
                        ratingValue={rating}
                        fillColor='#FFD700'
                        showTooltip={true}
                        tooltipDefaultText = 'Rate Your Proficiency'
                        tooltipArray={['Novice', 'Beginner', 'Competent', 'Proficient', 'Expert']}
                        initialValue={language.level}
                        readonly={!editable}
                        allowHover={!editable}
                        />
                    </Col>       
                </Row>
        </Container>
    );
}