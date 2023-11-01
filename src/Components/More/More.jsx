import React from 'react'
import './more.css'
import arrow from '../../Assets/img/arrow.png'
import img1 from '../../Assets/img/img1.jpg'
import img2 from '../../Assets/img/img2.jpg'
import img3 from '../../Assets/img/img3.jpg'
import img4 from '../../Assets/img/img4.jpg'
import img5 from '../../Assets/img/img5.jpg'
import img6 from '../../Assets/img/img6.jpg'
import img7 from '../../Assets/img/img7.jpg'
import img8 from '../../Assets/img/img8.jpg'
import img9 from '../../Assets/img/img9.jpg'

const MORE = () => {
    return (
        <section>
            <div className="more">
                <div className="contaner">
                    <div className="application">
                        <p className='feature'>Application features</p>
                        <div className="row">
                            <img src={arrow} alt="" />
                            <div className="name">
                                <h2>Natus error sit voluptatem accusantium</h2>
                                <br />
                                <p>Doloremque laudantium totam rem aperiam inventore veritatis et quasi architecto beatae vites.</p>
                            </div>
                        </div>
                        <div className="row">
                            <img src={arrow} alt="" />
                            <div className="name">
                                <h2>Natus error sit voluptatem accusantium</h2>
                                <br />
                                <p>Doloremque laudantium totam rem aperiam inventore veritatis et quasi architecto beatae vites.</p>
                            </div>
                        </div>
                        <div className="row">
                            <img src={arrow} alt="" />
                            <div className="name">
                                <h2>Natus error sit voluptatem accusantium</h2>
                                <br />
                                <p>Doloremque laudantium totam rem aperiam inventore veritatis et quasi architecto beatae vites.</p>
                            </div>
                        </div>
                    </div>
                    <div className="analyssis">
                        <p className='feature'>Weather analyssis</p>
                        <div className="detail">
                            <div className="arrow">
                                <img src={arrow} alt="" />
                                <p>Accusantium doloremquelaudantium rem aperiam</p>
                            </div>
                            <div class="border_station"></div>
                            <div className="arrow">
                                <img src={arrow} alt="" />
                                <p>Eaque ipsa quae ab illo inventore veritatis quasi</p>
                            </div>
                            <div class="border_station"></div>
                            <div className="arrow">
                                <img src={arrow} alt="" />
                                <p>Architecto beatea vitea dicta sunt explicabo</p>
                            </div>
                            <div class="border_station"></div>
                            <div className="arrow">
                                <img src={arrow} alt="" />
                                <p>nemo enim ipsam volutatem quia voluptas</p>
                            </div>
                            <div class="border_station"></div>
                            <div className="arrow">
                                <img src={arrow} alt="" />
                                <p>Aspernatur aut odit aut fugit, sed quia consequuntur </p>
                            </div>
                            <div class="border_station"></div>
                            <div className="arrow">
                                <img src={arrow} alt="" />
                                <p>magni dolores eos qui ratione voluptatem sequi</p>
                            </div>
                            <div class="border_station"></div>
                            <div className="arrow">
                                <img src={arrow} alt="" />
                                <p>Neque porro quisquam est quidolorem ipsum quia</p>
                            </div>
                        </div>
                    </div>
                    <div className="awesome">
                        <p className='feature'>Awesome photos</p>
                        <div className="photo">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img5} alt="" />
                        </div>
                        <div className="photo">
                            <img src={img4} alt="" />
                            <img src={img3} alt="" />
                            <img src={img6} alt="" />
                        </div>
                        <div className="photo">
                            <img src={img7} alt="" />
                            <img src={img8} alt="" />
                            <img src={img9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MORE