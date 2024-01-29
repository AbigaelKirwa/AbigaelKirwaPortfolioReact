import React, {useState, useEffect} from 'react';

const ChuckNorrisJoke = ()=>{
    const[joke, setJoke] = useState('');

    useEffect(()=>{
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
        fetchJoke();
    }, [])

    return(
        <div id='api_page_joke'>
            <h2>Dad Joke: </h2>
            <p>{joke}</p>
        </div>
    )

}

export default ChuckNorrisJoke;