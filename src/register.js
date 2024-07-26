import React, {useState} from "react";
import { CartContext } from "./router";
//import Navigation from "./navigation";
import { UserContext } from "./Home";
import { useContext } from "react";


function Register(){
    const [clgId,setClgId] = useState("");
    const[password, setPassword] = useState("");
    const[email,setEmail] = useState("");
    const[branch,setBranch] = useState("");
    const[year,setYear] = useState("");
    const[gender,setGender] = useState("");

    const formSubmitted= (e) => {
        e.preventDefault();
        const user = ({
            clgId,password,email,branch,year,gender
        });
        setislogin(true);

        console.log(user);
        setGlobalObject(user);
    }
    const {setislogin} = useContext(UserContext);
    const {setGlobalObject} = useContext(CartContext);

    return (
        <div className = "d-flex justify-content-center align-items-center" style = {{height : '100vh'}}>
            <div className="card" style={{width: "25rem", padding : "10px 10px"}}>
                <div className="card-body">
                    <h5 className="card-title">Register</h5>
                    <p className="card-text">provide your details to register</p>
                    <form onSubmit={formSubmitted}>
                        <div className="mb-3">
                            <label htmlFor="CollegeId" className="form-label">CollegeId</label>
                            <input type="text" className="form-control" id="collegeid" placeholder = "collegeid" onChange={(e) => {setClgId(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password" placeholder = "Password" onChange={(e) => {setPassword(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email address" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="Email Address" placeholder = "Email address" onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Branch</label>

                            <select className="form-select" aria-label="Default select example" onChange={(e) => {setBranch(e.target.value)}}>
                                <option value= "">Select  branch</option>
                                <option value="CSE">CSE</option>
                                <option value="IT">IT</option>
                                <option value="ECE">ECE</option>
                            </select>
                        </div>
                        <div className="mb-3">
                        <label  className="form-label">Year</label>

                            <select className="form-select" aria-label="Default select example" onChange={(e) => {setYear(e.target.value)}}>
                                <option value="">select a year</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                            </select>
                        </div>
                        <div className="mb-3">
                        <label  className="form-label">Gender</label><br></br>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={(e) => {setGender(e.target.value)}}/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={(e) => {setGender(e.target.value)}}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onChange={(e) => {setGender(e.target.value)}}/>
                            <label className="form-check-label" htmlFor="inlineRadio3">other </label>
                        </div>
                        </div>
                        <div >
                            <button type="submit" className = "btn btn-success float-end">Register</button>
                        </div>


                    </form>

                </div>
            </div>
        </div>

    );
}
export default Register;