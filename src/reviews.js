import React from 'react'

function Reviews(){
    const reviews = [["Harika","Good Product"],["Nikitha", "Worst Product"],["Sowjanya", "Well"]]
    return (
        <div>
            { 
            reviews.map((sublist,index) => (
                <div key = {index} style = {{ marginBottom: '30px', lineHeight : 0.5}}>
                    <h2>{sublist[0]}</h2>
                    <h3>{sublist[1]}</h3>


                </div>
            ))}
        </div>
    );

}
export default Reviews;

