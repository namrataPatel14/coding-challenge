import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/loader/loader';
import Nav from './components/navbar/nav';
import About from './containers/about/about';
import Experience from './containers/experience/experience';
import Home from './containers/home/home';
import Work from './containers/work/work';

function App() {
  const [loaderShow, setLoader] = useState(true)
  useEffect(() => {
    const setTime = setTimeout(() => {
      setLoader(false)
    }, 3100)
    return () => clearTimeout(setTime)
  }, [])
  return (
    <div>
      {
        loaderShow ? (<Loader />) :
          (<>
            <Nav />
            <div className='main-container'>
              <Home />
              <About />
              <Experience />
              <Work />
            </div>
          </>
          )
      }

    </div>
  );
}

export default App;
