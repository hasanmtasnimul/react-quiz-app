import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import CurrentQuestion from './CurrentQuestion';
import CurrentQuestion2 from './CurrentQuestion2';
import Loading from './Loading';
import Score from './Score';
import Oops from './Oops';

function App() {
  // const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false)
  const [questionNum, setQuestionNum] = useState(0);
  const { loading, isError, questions } = useFetch();

  const handleNext = () => {
    setQuestionNum((prev) => {
      return prev + 1
    })
  }
  const showScore = () => {
    setFinished(true);
  }

  if (finished) {
    return (
      <div className='App'>
        <Score score={score} />
      </div>
    )
  }

  if (loading) return (
    <div className='App'>
      <Loading />
    </div>
  )
  else if (!loading && isError) {
    return (
      <div className='App'>
        <Oops />
      </div>
    )
  }

  else {
    return (
      <div className="App">
        {<CurrentQuestion item={questions[questionNum]} setScore={setScore} questionNumber={questionNum + 1} />}
        {questionNum == 9 ?
          <button className='btn' onClick={showScore}>Show Result</button>
          : <button className='btn' onClick={handleNext}>Next</button>}


      </div >
    )
  }
}
export default App
