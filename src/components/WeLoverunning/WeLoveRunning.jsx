import React from 'react'
import Hero from '../../gfx/img/hero.jpg';
import './weLoveRunning.scss'


const WeLoveRunning = () => {
    return (
        <div className="containergrid">
            <div className="herogrid">
             <img src={Hero} alt="" className="heroimg" />
            </div>
            <div className="welovegrid">
            <h2 className="weloveimg h2margin">WE LOVE <span className="spanyellow">RUNNING</span></h2>
            </div>
        </div>
    )
}

export default WeLoveRunning
