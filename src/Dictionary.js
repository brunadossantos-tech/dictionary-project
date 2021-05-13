import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        //documentation https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        const pexelsAPI = "563492ad6f91700001000001ee089d3ac3a948ae81402ccc5d554b75";
        let pexelsURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization : `Bearer ${pexelsAPI}`};
        axios.get(pexelsURL, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault()
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    if(loaded){
        return(
                <div className="Dictionary">
                    <section>
                    <h2>What word you want search for?</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} placeholder="type a word"/>
                    </form>
                    </section>
                    <Results results={results}/>
                    <Photos photos={photos} />
                </div>
            );
    } else{
        load()
        return "Loading";
    }

    
}