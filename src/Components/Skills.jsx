import "./Skillsstyles.css"
import React from 'react';
import Sk from '../assets/sk.jpg'
import ht from '../assets/ht.png'
import c from '../assets/c.png'
import cpp from '../assets/cpp.png'
import jq from '../assets/jq.png'
import js from '../assets/js.png'
import py from '../assets/py.png'
import css from '../assets/css.png'
import rct from '../assets/react.png'


const skills = () => {
  return (
    <div >
        <h2 className="skills">Skills </h2>
        <div className="section">
        <div className="skill-container">
        
        <li>

        <li>
        <img src={ht} className="skillimg" alt="skillimg" width="60%" />
        </li>
          <h3>HTML</h3>
          <span class="bar"><span class="html"></span></span>
          
        </li>
        
        <li>
        <li>
        <img src={css} className="skillimg" alt="skillimg" width="60%" />
        </li>
          <h3>CSS</h3>
          <span class="bar"><span class="Css"></span></span>
        </li>
        <li>
        <li>
        <img src={js} className="skillimg" alt="skillimg" width="60%" />
        </li>
          <h3>JavaScript</h3>
          <span class="bar"><span class="javaScript"></span></span>
        </li>
        <li>
        <li>
        <img src={jq} className="skillimg" alt="skillimg" width="60%" />
        </li>
          <h3>Jquery</h3>
          <span class="bar"><span class="jquery"></span></span>
        </li>
        <li>
        <li>
        <img src={rct} className="skillimg" alt="skillimg" width="60%" />
        </li>
          <h3>React</h3>
          <span class="bar"><span class="react"></span></span>
        </li>
        <li>
        <li>
        <img src={c} className="skillimg" alt="skillimg" width="60%" />
        </li>
          <h3>C</h3>
          <span class="bar"><span class="C"></span></span>
        </li>
        <li>
        <li>
        <img src={cpp} className="skillimg" alt="skillimg" width="60%" />
        </li>
          <h3>C++</h3>
          <span class="bar"><span class="Cpp"></span></span>
        </li>
        <li>
        <li>
        <img src={py} className="skillimg" alt="skillimg" width="60%" />
        </li>
          <h3>Python</h3>
          <span class="bar"><span class="python"></span></span>
        </li>
        
        
    </div>
    <div>
        
    </div>

        </div>
      
    </div>
  );
}

export default skills;
