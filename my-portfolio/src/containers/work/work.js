import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './work.css';
import { FaUserAlt } from 'react-icons/fa';
import { HiMusicNote } from 'react-icons/hi';
import { FiCamera, FiSettings } from 'react-icons/fi';
import { BsChatFill, BsCalculatorFill } from 'react-icons/bs';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { IoGameController } from 'react-icons/io5';
import { TfiGallery } from 'react-icons/tfi';


function Work() {
   useEffect(() => {
      AOS.init();
   }, [])
   const headingWeb = `{...Web App Development}`
   const headingEmail = `{...Email Template Development}`
   const headingMob = `{...Mobile App Development}`
   return (
      <section className='work' data-aos="fade-up" data-aos-easing="linear" data-aos-delay=".3"
         data-aos-duration="1000">

         <div className='headingContainer'>
            <h1>My Work</h1>
         </div>
         <div className='workContainer'>
            <div className='grid-container'>
               <div className='content'>
                  <h4>{headingWeb}</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the 1960s with the release of
                     Letraset sheets containing Lorem Ipsum passages, and
                     more recently with desktop publishing software like Aldus PageMaker
                     including versions of Lorem Ipsum.</p>
               </div>
               <div className='image-container'>
                  <div className='img-mac'>
                     <img src={require("../../images/web-mac.png")} className='mac-img' alt='code' />
                     <div className='video-desktop'>
                        <video width="350" height="auto" controls autoPlay loop muted>
                           <source src={require('../../images/desktop-recording.mov')} type="video/mp4" />
                        </video>
                     </div>
                  </div>
                  <div className='img-tab'>
                     <img src={require("../../images/web-tab.png")} className='web-tab' alt='code' />
                     <div className='video-tab'>
                        <video width="130" height="auto" controls autoPlay loop muted>
                           <source src={require('../../images/ipad-recording.mov')} type="video/mp4" />
                        </video>
                     </div>
                  </div>
                  <div className='img-mob'>
                     <img src={require("../../images/pngmob.png")} className='web-mob' alt='code' />
                     <div className='video-mob'>
                        <video width="75" height="auto" controls autoPlay loop muted>
                           <source src={require('../../images/mobile-recording.mov')} type="video/mp4" />
                        </video>
                     </div>
                  </div>

                  {/* <img src={require("../../images/globe.png")} className='globe-img' alt='code' /> */}
                  <div className='laptop-content'>

                  </div>
               </div>
            </div>
            <div className='grid-container'>
               <div className='image-container'>
                  <div className="letter-image">
                     <div className="animated-mail">
                        <div className="back-fold"></div>
                        <div className="letter">
                           <div className="letter-border"></div>
                           <div className="letter-title"></div>
                           <div className="letter-context"></div>
                           <div className="letter-stamp">
                              <div className="letter-stamp-inner"></div>
                           </div>
                        </div>
                        <div className="top-fold"></div>
                        <div className="body"></div>
                        <div className="left-fold"></div>
                     </div>
                     <div className="shadow"></div>
                  </div>
               </div>
               <div className='content'>
                  <h4>{headingEmail}</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the 1960s with the release of
                     Letraset sheets containing Lorem Ipsum passages, and
                     more recently with desktop publishing software like Aldus PageMaker
                     including versions of Lorem Ipsum.</p>
               </div>
            </div>
            <div className='grid-container'>
               <div className='content'>
                  <h4>{headingMob}</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the 1960s with the release of
                     Letraset sheets containing Lorem Ipsum passages, and
                     more recently with desktop publishing software like Aldus PageMaker
                     including versions of Lorem Ipsum.</p>
               </div>
               <div className='image-container'>
                  {/* <CiMobile3 size={300} className='icon-img' /> */}
                  <div className='mob-wrapper'>
                     <img src={require("../../images/pngmob.png")} className='mob-img' alt='code' />
                     <div className='image-inner app-grid'>
                        <div className='grid1'><span><HiMusicNote size={15} /></span></div>
                        <div className='grid1'><span><BsChatFill size={15} /></span></div>
                        <div className='grid1'><span><AiTwotoneCalendar size={15} /></span></div>
                        <div className='grid1'><span><BsCalculatorFill size={15} /></span></div>
                        <div className='grid1'><span><IoGameController size={15} /></span></div>
                        <div className='grid1'><span><FaUserAlt size={15} /></span></div>
                        <div className='grid1'><span><FiCamera size={15} /></span></div>
                        <div className='grid1'><span><TfiGallery size={15} color={'#fff'} /></span></div>
                        <div className='grid1'><span><FiSettings size={15} /></span></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Work