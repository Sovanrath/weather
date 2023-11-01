import React from 'react'
import './footer.css'
import {TfiFacebook} from 'react-icons/tfi'
import {SiTwitter} from 'react-icons/si'
import {TfiGoogle} from 'react-icons/tfi'
import {SiPinterest} from 'react-icons/si'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="contaner">
                    <div className="search">
                        <input type="text" name='city' placeholder='Find your location...' />
                        <button>Subscribe</button>
                        <div className="conect">
                           <a href="#"> <h4><TfiFacebook/></h4></a>
                            <a href="#"><h4><SiTwitter/></h4></a>
                            <a href="#"><h4><TfiGoogle/></h4></a>
                            <a href="#"><h4><SiPinterest/></h4></a>
                        </div>
                    </div>
                    <p>Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer