
import React , {useState}from "react";
import Login from './login';
import Register from './register';
function Onboard(){
    const [isLogin, setIsLogin] = useState(true);
    const handleLogin = () =>{setIsLogin(true);}
    const handleRegister = () => {setIsLogin(false);}
    return(
        <div>
            <button onClick = {handleLogin}>Login</button>
            <button onClick = {handleRegister}>Register</button>
            {isLogin ? 
            <div>
                <Login/>
            </div>:
            <div>
                <Register/> 
            </div>}
        </div>

    );
}
export default Onboard;