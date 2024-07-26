import {  useState } from "react";
import Reviews from './reviews';

function Ten(){
    const [text,setText] = useState("");
    const [review, setReview] = useState("");

    const addReview = () => {
        setReview(text);
        setText("");
    };
    const inputValueChange = (event) => {
        setText(event.target.value);
    }
    return(
        <div className = "card" style = {{width:'auto', height : '300px' }}>
            <div className = "card-body">
                <input type = "text" placeholder = "Enter a review" styles = {{width: 'auto'}} onChange = {inputValueChange}/>
                <button type="button" class="btn btn-success" onClick = {addReview}> AddReview </button>
                <h1>{review}</h1>
                <Reviews/>
            </div>
        </div>

    );
}
export default Ten;