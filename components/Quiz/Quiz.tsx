import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {IQuestion } from '@/mockdata/mockdata';

interface Props { question: IQuestion}
export default function Quiz({question}: Props) {
    return (
        <FormControl>
                <div>
                    <FormLabel key={question.id}>{question.text}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        //defaultValue={item.answers[0]}
                        name="radio-buttons-group"
                    >
                    {question.answers.map((answer) => (
                        
                        <FormControlLabel key={answer.id} value={answer.value} control={<Radio />} label={answer.value} />
                        
                    ))}
                    </RadioGroup>
                    
                </div>    
            
            
</FormControl>)}

