import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function useFetch() {
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [questions, setQuestions] = useState(null);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get("https://the-trivia-api.com/api/questions");
            setQuestions(response.data);
        } catch (error) {
            setLoading(false);
            setIsError(true);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, [])

    return { loading, isError, questions }
}
