import React,{createContext, useState} from "react";
//import {Link} from "react-router-dom";
import Onboard from './nav';
import Navigation from './navigation';
export const UserContext = createContext();
function Home(){
    const [islogin,setislogin] = useState(false);
    return (
        <div>
            {/*<UserContext.Provider value = {{islogin, setislogin}}>*/}
                {
                islogin?
                <div>
                    <Navigation/>
                    <h1>Welcome to SVECW Commerce</h1>
                    {/*<Link to = "products">View Products</Link>*/}
                </div> : 
                <Onboard/>
                }
            {/*</UserContext.Provider>*/}
        </div>


    );
}
export default Home;
