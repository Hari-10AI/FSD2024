import React from 'react';

function Four(){
    const array = ["Apple", "Mango","Kiwi"];
    const listitems = array.map((fruit,index) => 
    <li key = {index} > {fruit} </li>)
    return (
    <div>
        <h2>List of items</h2>
        <h3>{listitems}</h3>
    </div>
    )

}
export default Four; 