import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';


export default function CurrentQuestion2(props) {
    const [question, setQuestion] = useState(props.item.question);
    const [questionNumber, setQuestionNumber] = useState(props.questionNumber)
    const [correctAnswer, setCorrectAnswer] = useState(props.item.correctAnswer);
    // const [optionsArray, setOptionsArray] = useState(props.item.incorrectAnswers.concat([correctAnswer]));
    const [optionsArray, setOptionsArray] = useState(shuffleOptions(props.item.incorrectAnswers.concat([correctAnswer])));
    const [options, setOptions] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);


    function shuffleOptions(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function checkAnswer(value) {
        setSelectedOption(value);
        const newOptions = optionsArray.map((item) => {
            return (
                <div className='quiz-option' key={item}>
                    {((item === correctAnswer)) && <FontAwesomeIcon className='fa-check' icon={faCheck} />}
                    {((item === selectedOption)) && (selectedOption !== correctAnswer) && <FontAwesomeIcon className='fa-xmark' icon={faXmark} /> && console.log("xmark")}
                    {item}
                </div >
            )
        });
        setOptions(newOptions);
        if (value === correctAnswer) {
            console.log("correct");
            props.setScore((prev) => { return prev + 1 })
        }
        else {
            console.log("incorrect");

        }
    }


    useEffect(() => {
        const newOptions = optionsArray.map((item) => {
            return (
                <div className='quiz-option' key={item} onClick={() => { checkAnswer(item) }}>
                    {item}
                </div >
            )
        });
        setOptions(newOptions);
    }, [])



    // useEffect(() => {
    //     const newOptions = optionsArray.map((item) => {
    //         return (
    //             <div className='quiz-option' key={item} onClick={() => { checkAnswer(item) }}>
    //                 {item}
    //             </div >
    //         )
    //     });
    //     console.log('options changed')
    //     setOptions(newOptions);
    //     console.log(options);
    // }, [props])

    // useEffect(() => {
    //     const newOptions = optionsArray.map((item) => {
    //         return (
    //             <div className='quiz-option' key={item} onClick={() => { !attempted && checkAnswer(item) }}>
    //                 {(attempted && (item === correctAnswer)) && <FontAwesomeIcon className='fa-check' icon={faCheck} />}
    //                 {(attempted && (item === selectedOption)) && (selectedOption !== correctAnswer) && <FontAwesomeIcon className='fa-xmark' icon={faXmark} />}
    //                 {item}
    //             </div >
    //         )
    //     });
    //     console.log('tick marking part ran')
    //     setOptions(newOptions);
    // }, [attempted])


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
