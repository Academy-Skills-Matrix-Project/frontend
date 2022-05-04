import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Rater from '../Rating/Rating';
// import CategoryDropdown from '../DropdownButton/CategoryDropdown';
import './SkillRow.css';
import "react-widgets/styles.css";
import ComboBox from 'react-widgets/Combobox';
import { Rating } from 'react-simple-star-rating';

export default function(props) {
    
    const {language} = props
    // const [skillTitles, setSkillTitle] = useState();
    const [languages, setLanguages] = useState([]);

    const [title, setTitle] = useState(language.title);
    const [level, setLevel] = useState(0);
    const [id, setID] = useState(0);
    const [rating, setRating] = useState(0); // initial rating value
    const handleRating = (rate) => {
        setRating(rate)
      }
    let selectedIdLanguageId;
    let sID;
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
            // if(skill.title === value){
            //     sID = skill.id;
            //     console.log(sID)
            // } else {
            //     console.log('error')
            // }
        });
        console.log(selectedIdLanguageId[0])
        setID(selectedIdLanguageId[0].id)
    }
    useEffect(() => {
        
         fetchLanguages()
    }, [])

    let languageTitles;
    if(languages.length > 1){
        languageTitles = (languages.map(lang => lang.title))
    }
    return (
        <Container fluid className='position-relative mt-4 bg-light border rounded shadow-sm ' data-testid='language-row'>
                    {/* Renders image for red 'X' button in top left of item  */}
                <button 
                onClick={() => props.removeLanguageRow(language.id)}
                className= ' position-absolute top-0 start-0 translate-middle bg-transparent border-0 '>
                    <img  
                        src="/Cancel.png"
                        width={30}
                        alt='delete row'
                        data-testid='delete-button'
                        />
                </button>
                <button onClick={() => {console.log(id);props.handleSave(id, title, level)}} className=' position-absolute top-0 end-0 translate-middle bg-transparent border-0'>
                    Save
                </button>
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
                        onChange={(value) => {setTitle(value); setLanguageId(value);}}
                        />
                        {/* <Form.Control className="textfield form-control border border-2 w-75 m-2" type="input" data-testid='skill-text-input'/> */}
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
                        readonly={false}
                        allowHover={true}
                        />
                    </Col>       
                </Row>
        </Container>
    );
}