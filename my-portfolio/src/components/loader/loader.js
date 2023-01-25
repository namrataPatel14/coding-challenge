import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './loader.css';

function Loader() {
    return (
        <div className='loader'>
            <AiOutlineLeft size={200} className='loader-animation left'/>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <AiOutlineRight size={200} className='loader-animation right'/>
           
        </div>
    )
}

export default Loader