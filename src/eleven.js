import React, {useState} from "react";
import Reviews from './reviews';

function Eleven(){
    const [text,setText] = useState("");
    const [reviews] = useState([]); 

    const addReview = () =>
    {
        reviews.push(text);
        setText("");
    };
    const inputValueChange = (e) =>{
        setText(e.target.value);
    };

    return (
        <div>
            <input type = "text" placeholder = "Enter a review" onChange = {inputValueChange}/>
            <button type="button" class="btn btn-success" onClick = {addReview}>Add</button>
            {
                reviews.map((review,index) => (
                    <div key = {index}>{review}
                    <Reviews/>
                    </div>
                ))
            }


        </div>

    );

}
export default Eleven;