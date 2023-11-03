import React from 'react'
import './live.css'
import live1 from '../../Assets/img/live1.jpg'
import live2 from '../../Assets/img/live2.jpg'
import live3 from '../../Assets/img/live3.jpg'
import live4 from '../../Assets/img/live4.jpg'
import plays from '../../Assets/img/play-button.png'

const Live = () => {
    return (
        <section  className='live'>
            <p className='lives'>Live cameras</p>
            <div className="video">
               <div className="video-list">
                    <div className="video-live">
                        <div className="play">
                            <img src={live1} alt="" />
                            <img className='buttonplay' src={plays} alt="" />
                        </div>
                        <p className='city'>New York</p>
                        <p>8 oct, 8:00PM</p>
                    </div>
                    <div className="video-live">
                        <div className="play">
                            <img src={live2} alt="" />
                            <img className='buttonplay' src={plays} alt="" />
                        </div>
                        <p className='city'>Los Angeles</p>
                        <p>8 oct, 8:00PM</p>
                    </div>
               </div>
                <div className="video-list">
                    <div className="video-live">
                        <div className="play">
                            <img src={live3} alt="" />
                            <img className='buttonplay' src={plays} alt="" />
                        </div>
                        <p className='city'>Chicago</p>
                        <p>8 oct, 8:00PM</p>
                    </div>
                    <div className="video-live">
                        <div className="play">
                            <img src={live4} alt="" />
                            <img className='buttonplay' src={plays} alt="" />
                        </div>
                        <p className='city'>Cambodia</p>
                        <p>8 oct, 5:00PM</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Live