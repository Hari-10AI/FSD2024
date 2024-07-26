import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createContext, useState} from "react";
import Assign from './cards'
import Home from './Home';
import Profile from './profile';
export const CartContext = createContext();
function Path(){
    const [globalcount , setglobalcount] = useState(0); 
    const [globalObject, setGlobalObject] = useState({});
    //const [globalIsLogin, setGlobalIsLogin] = useState(false);

    return (
        <CartContext.Provider value={{globalcount, setglobalcount,globalObject,setGlobalObject}} >

    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/products" element = {<Assign/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        
    </Routes>
    </BrowserRouter>
    </CartContext.Provider>
    );
}
export default Path;