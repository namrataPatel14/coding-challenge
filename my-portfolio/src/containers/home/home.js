import React from 'react';
import './home.css';

function Home() {
    return (
        <section className='Home'>
            <div className='img-container'>
                <div className='laptop-container'>
                   <img src={require("../../images/laptop.webp")} className='laptop-img' alt='laptop' />
                   <div className='shadow-laptop'></div>
                   <img src={require("../../images/code.jpeg")} className='code-img' alt='code' />
                   <div className='output'>
                    <div className='output-container'>
                      <h1>Hi, my name is Namrata.</h1>
                      <h2>I build things for the web.</h2>
                      <p>I’m a front end developer specializing in building<br/> exceptional digital experiences. </p>
                      </div>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Home