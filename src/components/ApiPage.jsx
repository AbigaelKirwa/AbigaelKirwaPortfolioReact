import React, {useState, useEffect, useCallback} from 'react';

const Jokes = ()=>{
    const[joke, setJoke] = useState('');

    const fetchJoke = async()=>{
        try{
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'text/plain',
                }
            });
            const data = await response.text();
            setJoke(data)
        }
        catch(error){
            console.error("Error fetching the joke:", error)
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    const handleFetchJokeClick = useCallback(() => {
        fetchJoke();
    }, []); // Empty dependency array ensures that the function is memoized and won't change

    return(
        <div id='api_page_joke'>
            <h2>Dad Joke: </h2>
            <p>{joke}</p>
            <button onClick={handleFetchJokeClick}>Get New Joke</button>
        </div>
    )

}

export default Jokes;