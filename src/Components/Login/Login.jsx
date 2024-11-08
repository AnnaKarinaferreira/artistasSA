import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Login.css';

const Login = () =>{
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit=(event) => {
    event.preventDefault();

    console.log("Envio");
}

    return(
        <>
       
        </>
    )
}
export default Login;