import React from 'react'
import './about.css'
import arrow from '../../Assets/img/arrow.png'

const About = () => {
    return (
        <section>
            <div className="about">
                <div className="contaner">
                    <div className="infomation">
                        <p className='num'>06.10</p>
                        <div className="latter">
                            <b>Doloremque laudantium totam sequi</b>
                            <br /><br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nihil nam fugit illum, incidunt laborum nulla. Recusandae non quo, esse magni nostrum ullam quaerat earum, consequatur blanditiis, omnis pariatur culpa.</p>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="infomation">
                        <p className='num'>06.10</p>
                        <div className="latter">
                            <b>Doloremque laudantium totam sequi</b>
                            <br /><br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nihil nam fugit illum, incidunt laborum nulla. Recusandae non quo, esse magni nostrum ullam quaerat earum, consequatur blanditiis, omnis pariatur culpa.</p>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="infomation">
                        <p className='num'>06.10</p>
                        <div className="latter">
                            <b>Doloremque laudantium totam sequi</b>
                            <br /><br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nihil nam fugit illum, incidunt laborum nulla. Recusandae non quo, esse magni nostrum ullam quaerat earum, consequatur blanditiis, omnis pariatur culpa.</p>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About