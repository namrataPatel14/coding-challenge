import React, { useEffect, useState } from 'react';
import './experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineRight } from 'react-icons/ai';

function Experience() {
  const [visible, setVisible] = useState(false)
  const collapsible = () => {
    setVisible(!visible)
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='experience' data-aos="fade-up" data-aos-easing="linear" data-aos-delay=".3"
      data-aos-duration="1000">
      <div className='headingContainer'>
        <h1>Professional Experience</h1>
      </div>
      <div className='expContainer'>
        <div className='exp-content'>
          <div className='exp-title'>
            <p><span>Software Developer</span>:\ @Wovvtech <AiOutlineRight size={20} className='' />  Sep 2020 - Aug 2022 <AiOutlineRight size={20} className='' /><b>_</b></p>
            <button className={visible ? 'yellow-button' : 'green-button'} onClick={() => collapsible()}>{visible ? '-' : '+'}</button>
          </div>
          <div className={visible ? 'exp-wrapper active' : 'exp-wrapper'}>
            <div className='exp-wrapper-inner'>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Location</span></div>
                <div className='grid-content location'>Vadodara, India</div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Responsibilities</span></div>
                <div className='grid-content'>
                  <ul className='res-list'>
                    <li>Responsible for development of new highly-responsive, web-based user interface</li>
                    <li>Work and collaborate with the rest of the engineering team</li>
                    <li>Work with product team and graphic designers</li>
                    <li>Learn and understand user interactions</li>
                    <li>Develop a flexible and well-structured front-end architecture, along with the APIs to support it.</li>
                  </ul>
                </div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Development</span></div>
                <div className='grid-content dev-text'>Developed web and mobile application using React.js and React Native</div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Developed_with</span></div>
                <div className='grid-content'>
                  <ul className='tech-list'>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>TypeScript</li>
                    <li>React Native</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='exp-content'>
          <div className='exp-title'>
            <p><span>Front End Developer</span>:\ @Megh_Technologies <AiOutlineRight size={20} className='' />  June 2019 – Aug 2020 <AiOutlineRight size={20} className='' /><b>_</b></p>
            <button className={visible ? 'yellow-button' : 'green-button'} onClick={() => collapsible()}>{visible ? '-' : '+'}</button>
          </div>
          <div className={visible ? 'exp-wrapper active' : 'exp-wrapper'}>
            <div className='exp-wrapper-inner'>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Location</span></div>
                <div className='grid-content location'>Vadodara, India</div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Responsibilities</span></div>
                <div className='grid-content'>
                  <ul className='res-list'>
                    <li>Responsible for development of new highly-responsive, web-based user interface</li>
                    <li>Work and collaborate with the rest of the engineering team</li>
                    <li>Work with product team and graphic designers</li>
                    <li>Learn and understand user interactions</li>
                    <li>Develop a flexible and well-structured front-end architecture, along with the APIs to support it.</li>
                  </ul>
                </div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Development</span></div>
                <div className='grid-content dev-text'>Developed web and mobile application using React.js and React Native</div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Developed_with</span></div>
                <div className='grid-content'>
                  <ul className='tech-list'>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>TypeScript</li>
                    <li>React Native</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='exp-content'>
          <div className='exp-title'>
            <p><span>Web Developer</span>:\ @Dhrup_Technologies <AiOutlineRight size={20} className='' />  Aug 2017 – June 2019 <AiOutlineRight size={20} className='' /><b>_</b></p>
            <button className={visible ? 'yellow-button' : 'green-button'} onClick={() => collapsible()}>{visible ? '-' : '+'}</button>
          </div>
          <div className={visible ? 'exp-wrapper active' : 'exp-wrapper'}>
            <div className='exp-wrapper-inner'>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Location</span></div>
                <div className='grid-content location'>Vadodara, India</div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Responsibilities</span></div>
                <div className='grid-content'>
                  <ul className='res-list'>
                    <li>Responsible for development of new highly-responsive, web-based user interface</li>
                    <li>Work and collaborate with the rest of the engineering team</li>
                    <li>Work with product team and graphic designers</li>
                    <li>Learn and understand user interactions</li>
                    <li>Develop a flexible and well-structured front-end architecture, along with the APIs to support it.</li>
                  </ul>
                </div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Development</span></div>
                <div className='grid-content dev-text'>Developed web and mobile application using React.js and React Native</div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Developed_with</span></div>
                <div className='grid-content'>
                  <ul className='tech-list'>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>TypeScript</li>
                    <li>React Native</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='exp-content'>
          <div className='exp-title'>
            <p><span>Junior Web Developer</span>:\ @Bitbuffs_Technologies <AiOutlineRight size={20} className='' />  Oct 2016 - May 2017 <AiOutlineRight size={20} className='' /><b>_</b></p>
            <button className={visible ? 'yellow-button' : 'green-button'} onClick={() => collapsible()}>{visible ? '-' : '+'}</button>
          </div>
          <div className={visible ? 'exp-wrapper active' : 'exp-wrapper'}>
            <div className='exp-wrapper-inner'>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Location</span></div>
                <div className='grid-content location'>Vadodara, India</div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Responsibilities</span></div>
                <div className='grid-content'>
                  <ul className='res-list'>
                    <li>Responsible for development of new highly-responsive, web-based user interface</li>
                    <li>Work and collaborate with the rest of the engineering team</li>
                    <li>Work with product team and graphic designers</li>
                    <li>Learn and understand user interactions</li>
                    <li>Develop a flexible and well-structured front-end architecture, along with the APIs to support it.</li>
                  </ul>
                </div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Development</span></div>
                <div className='grid-content dev-text'>Developed web and mobile application using React.js and React Native</div>
              </div>
              <div className='grid-Wrapper'>
                <div className='grid-title'><span>Developed_with</span></div>
                <div className='grid-content'>
                  <ul className='tech-list'>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>TypeScript</li>
                    <li>React Native</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>


  )
}
export default Experience