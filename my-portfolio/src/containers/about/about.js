import React, { useEffect } from 'react';
import './about.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='about' data-aos="fade-up" data-aos-easing="linear" data-aos-delay=".3"
            data-aos-duration="1000">
                
            <div className='headingContainer'>
                <h1>About Me</h1>
            </div>
            <div className='aboutContainer'>
                <div className='headerContainer'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
                <p>
                 My interest in web development started back in <span>2016</span> when I build a Web Application as a final year project. In my project I learnt basic skills
                    about <span>HTML, CSS</span> and <span>JS</span>.
                    I really admire the way WEB has been evovled over the years.
                    It is quite overwhelming with lot technologies emerging at the same time it is really exciting to
                    upskill ourselves to deliver great user experinces using the <span>latest languages and technologies</span>.
                    I think for almost any business it is really important to provide the customer with an interface
                    which is <span>easy to use</span>, and have an positive impact. And to achieve the same I've been working since last six
                    years in <span>Web & Mobile Application</span> domain using the latest technologies. 
                </p>
                <div className='languagesContainer'>
                  <p>Here are a few technologies, languages and frameworks I’ve been worked with:</p>
                  
                  <ul>
                    <li>Html</li>
                    <li>material-UI</li>
                    <li>React</li>
                    <li>Css</li>
                    <li>JavaScript(ES6+)</li>
                    <li>React Native</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                    <li>Typescript</li>
                  </ul>
                  
                </div>
            </div>
           
        </section>


    )
}
export default About