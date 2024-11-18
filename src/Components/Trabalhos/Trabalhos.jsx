import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Trabalhos.css'
import HeaderLog from '../Header/HeaderLog';

const Trabalhos = () => {
    return(
        <>
        <HeaderLog></HeaderLog>
        <div><p>Trabalhos</p></div>
        </>
    )
}

export default Trabalhos;