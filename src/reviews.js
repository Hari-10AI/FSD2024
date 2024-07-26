import React from 'react'

function Reviews(){
    const reviews = [["Harika","Good Product"],["Nikitha", "Worst Product"],["Sowjanya", "Nice product"]]
    return (
        <div>
            <h2>Reviews</h2>

            {
            reviews.map((sublist,index) => (
                <div key = {index} style = {{ marginBottom: '30px', lineHeight : 0.5}}>
                    <h5>{sublist[0]}</h5>
                    <p>{sublist[1]}</p>


                </div>
            ))}
        </div>
    );

}
export default Reviews;

