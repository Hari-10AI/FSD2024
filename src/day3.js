import {useRef} from "react";
function Fourteen(){
    const firstRef = useRef(null);
    const handleClick = (event) =>{
        event.preventDefault();
        console.log("Form submitted");
        console.log(firstRef.current.value);
    }
    return(
        <div>
            <form onSubmit = {handleClick}>
                <input type = "text" ref = {firstRef}/>
                <button type = "submit">Submit</button>
            </form>
        </div>

    );
}
export default Fourteen;