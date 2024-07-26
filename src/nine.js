import { useContext, useEffect, useState } from "react";
import { CartContext } from "./router";

 
function Nine(){
    const [count, setCount] = useState(0);
    const {globalcount, setglobalcount} = useContext(CartContext);

    useEffect(()=>{
        setCount(0);    
        console.log("Use effect is called");
    },[]);

    const increment = () =>{
        setglobalcount(globalcount + 1);
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
        setglobalcount(globalcount - 1);
    }


    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            { count > 0 ? 
            <div style = {{display: 'flex'}}>
            <button class = "btn btn-light btn-md" onClick = {increment}>+</button>
            <h4 style = {{marginRight : '4px', marginLeft : '4px' , }}> {count}</h4>
            <button class = "btn btn-light btn-md" onClick = {decrement}>-</button></div>:
            <button type="button" class="btn btn-success btn-md" style = {{borderRadius: '10px'}}  onClick = {increment}>Add to cart</button>

            } 



        </div>
    )
}
export default Nine;