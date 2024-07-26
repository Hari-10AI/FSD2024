import React ,{useRef, useState, useEffect, useContext} from "react";
import { UserContext } from "./Home";


function Login(){
    const collegeIdRef = useRef(null);
    const passwordRef = useRef(null);
    const [loginmessage, setMessage] = useState("");
    const {islogin, setislogin} = useContext(UserContext);

    useEffect (() => 
    {
        collegeIdRef.current.focus();
    })

    const formSubmitted = (e) =>
    {
        e.preventDefault();
        if(collegeIdRef.current.value === passwordRef.current.value){
            setMessage("valid credentials");
            setislogin(true);
        }
        else{setMessage("Invalid credentials");}

    }
    return(
        <div className = "d-flex justify-content-center align-items-center" style = {{height : '100vh'}}>
            <div className = "card" style = {{width: "25rem", padding : '10px 10px'}}>
                <div className="card-body">
                    <h4 className="card-title">Login</h4>
                    <h6 className="card-text mb-4">provide your login credentials</h6>
                        <form onSubmit = {formSubmitted}>
                        <div className ="mb-3">
                            <label htmlFor = "CollegeId" className = "form-label">CollegeId</label>
                            <input type="text" className = "form-control" id="collegeid" placeholder = "collegeid" ref={collegeIdRef}></input>
                        </div>
                        <div className = "mb-4">
                            <label htmlFor = "Password" className = "form-label">Password</label>
                            <input type="password" className = "form-control" id="password" placeholder = "password" ref={passwordRef}></input>
                        </div>
                        <div>
                            <button type="submit" className = "btn btn-success float-end">Login</button> <br/><br/>
                        </div>
                        {(loginmessage !== "") && <div className="text-center">{loginmessage}</div>}
                    </form>
                </div>
            </div>
        </div>

    );
}
export default Login;