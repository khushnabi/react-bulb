import React, { useState } from 'react';
import '../style/style.css';
import Line from './Line';


const Bulb = (props) => {
    let count = 15;
    const array = [...new Array(count)];

    return (
       <div className="container">
          <div className="backgorund">
              <div className="bulb">  {props.state == 'on' && ( array.map((_, i) => <div style={{transform: `rotate(${(i * 280 / count) - 40 }deg) translateX(-170px)`}} key={i} className="light-line" />))}
                
                  <div className={"light light-"+props.state}>
                      
                   

                      <div className="glow">

                      </div>
                  </div>
                  <div className="light-holder">
                    <div className="holder-stand">
                        <div className="holder-line"></div>
                        <div className="holder-line"></div>
                        <div className="holder-line"></div>
                    </div>
                    <div className="bottom-loop">

                    </div>
                  </div>
              </div>
          </div>
       </div>
    )
}

export default Bulb;