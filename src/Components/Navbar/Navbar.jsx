import React, { useState } from 'react'
import './navbar.css'
import logo from '../../Assets/img/logo.png'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TiThMenu} from 'react-icons/ti'

const Navbar = () => {
    const [active, setActive] = useState('right')
    const showNav = () =>{
        setActive('right activeright')
    }
    const removeNav = () =>{
        setActive(' right ')
    }

    return (
        <header className="header">
            <div className="topbar">
                <div className="left">
                    <img src={logo} alt="" />
                    <div className="text">
                        <h2>company name</h2>
                        <p>tagline gose here</p>
                    </div>
                </div>
                <div class={active}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">liveCameras</a></li>
                        <li><a href="#">Photos</a></li>
                        <li><a href="#">content</a></li>
                    </ul>
                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TiThMenu className='icon'/>
                </div>
            </div>
        </header>
    )
}

export default Navbar