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


    function checkAnswer(selectedValue) {
        console.log(selectedValue);
        console.log(correctAnswer);

        // setSelectedOption(value);
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
        if (selectedValue === correctAnswer) {
            console.log("correct");
            // props.setScore((prev) => { return prev + 1 })
            props.updateScore();
        }
        else {
            console.log("incorrect");

        }
    }

    // const setCurrentProp = async () => {
    //     await setQuestionNumber(props.questionNumber);
    //     await setQuestion(props.item.question);
    //     await setCorrectAnswer(props.item.correctAnswer);
    //     console.log("this line ran");
    //     console.log(correctAnswer);
    //     await setOptionsArray(shuffleOptions(props.item.incorrectAnswers.concat([props.item.correctAnswer])));
    //     const newOptions = await optionsArray.map((item) => {
    //         return (
    //             <div className='quiz-option' key={item} onClick={() => { checkAnswer(item) }}>
    //                 {item}
    //             </div >
    //         )
    //     });
    //     await setOptions(newOptions);
    //     console.log(question);
    //     console.log(correctAnswer);
    //     console.log(optionsArray);
    //     console.log(props.item.question)
    // }

    // useEffect(() => {
    //     setCurrentProp();
    // }, [questionNumber])

    // useEffect(() => {
    //     const newOptions = optionsArray.map((item) => {
    //         return (
    //             <div className='quiz-option' key={item} onClick={() => { checkAnswer(item) }}>
    //                 {item}
    //             </div >
    //         )
    //     });
    //     setOptions(newOptions);
    // }, [props])



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

    useEffect(() => {
        console.log(question);
        console.log(correctAnswer);
    }, [props])
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
