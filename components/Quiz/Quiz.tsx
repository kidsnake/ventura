import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function Quiz() {
    return (
        
        <FormControl>
            {QuizData.map((item) => (
                <div>
                    <FormLabel key={item.question_id}>{item.question}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        //defaultValue={item.answers[0]}
                        name="radio-buttons-group"
                    >
                    {item.answers.map((ans) => (
                        <div>
                        <FormControlLabel value={ans} control={<Radio />} label={ans} />
                        </div>
                        
                    ))}
                    </RadioGroup>
                    
                </div>    
            ))}
            
</FormControl>)}

const QuizData = [
    {
        question_id: '1',
        question: 'Is Zagreb in Croatia?',
        points: '5',
        ans_corr: 'Yes',
        answers: ['Yes', 'No'],
    }, 
    {
        question_id: '2',
        question: 'How many citizens does Zagreb have?',
        points: '5',
        ans_corr: '1 million',
        answers: ['500 thousands', '1 million', '2 million'],
    }
]
