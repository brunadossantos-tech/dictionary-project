import React from "react";
import Audio from "./Audio";
import "./Phonetic.css";

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <Audio audio={props.phonetic.audio} />
            <span className="text"> 
                {props.phonetic.text}
            </span>
        </div>
    );
}