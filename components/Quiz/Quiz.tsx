import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { QuizData, QuizAll } from '@/mock data/mockdata';


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

