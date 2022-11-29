import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';


export default function CurrentQuestion(props) {
    function shuffleOptions(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function checkAnswer(selectedValue) {
        if (selectedValue === correctAnswer) {
            props.updateScore();

        }
        const newOptions = optionsArray.map((item) => {
            return (
                <div className='quiz-option' key={item}>
                    {((item === correctAnswer)) && <FontAwesomeIcon className='fa-check' icon={faCheck} />}
                    {((item === selectedValue)) && (selectedValue !== correctAnswer) && <FontAwesomeIcon className='fa-xmark' icon={faXmark} />}
                    {item}
                </div >
            )
        });
        setOptions(newOptions);
    }
    const question = props.item.question;
    const questionNumber = props.questionNumber;
    const correctAnswer = props.item.correctAnswer;
    const optionsArray = shuffleOptions(props.item.incorrectAnswers.concat([correctAnswer]));
    const [options, setOptions] = useState();

    useEffect(() => {
        setOptions(optionsArray.map((item) => {
            return (
                <div className='quiz-option' key={item} onClick={() => { checkAnswer(item) }}>
                    {item}
                </div >
            )
        }))
    }, [question])

    return (
        <div className='current-quiz-question'>
            <div className='quiz-question'>
                <h5 style={{ opacity: "40%", marginBottom: "1rem" }}>Question {questionNumber} of 10</h5>
                {question}
            </div>
            {options}
        </div>
    )

}
