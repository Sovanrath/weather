import React, { useEffect, useState } from 'react'
import './home.css'
import monday from '../../Assets/img/icon-1.svg'
import tuesday from '../../Assets/img/icon-2.svg'
import wednesday from '../../Assets/img/icon-3.svg'
import thursday from '../../Assets/img/icon-4.svg'
import friday from '../../Assets/img/icon-5.svg'
import saturday from '../../Assets/img/icon-6.svg'
import sunday from '../../Assets/img/icon-7.svg'
import umbrella from '../../Assets/img/umbrella.png'
import air from '../../Assets/img/wind.png'
import compass from '../../Assets/img/compass.png'
import axios from 'axios'


const Home = () => {
    const [data, setData] = useState({
        celcius: 10,
        name: '',
        humidity: 10,
        speed: 2
    
    })
    const [name, setName] = useState('');
    
    const handleClick = () => {
        if(name !== ""){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b00144927fe68e105a7f3b490e868faa&units=metric`; 
            axios.get(apiUrl)
            .then(res => {
                console.log(res.data);
                setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed })
        })
        .catch( err => console.log(err));
        }
    }
    return (
        <section className="home">
           <div className="search">
                <input type="text" name='city' placeholder='Find your location...'
                onChange={e => setName(e.target.value)} />
                <button onClick={handleClick}>Find</button>
           </div>
           <div className="week">
                <div className="allday">
                    <div className="monday">
                        <div className="day">
                            <p>Moday</p>
                            <div className='date'>
                                <div className="number">
                                    <p>6 Oct</p>
                                </div>
                            </div>
                        </div>
                        <div className="city">
                            <p>{data.name}</p>
                            <div className="weathers">
                                <h1 className='temper'>{data.celcius}°C</h1>
                                <img src={monday} alt="" />
                            </div>
                        </div>
                        <div className="detail">
                            <div className="east">
                                <img src={umbrella} alt="" />
                                <p>{Math.round(data.humidity)}%</p>
                            </div>
                            <div className="east">
                                <img src={air} alt="" />
                                <p>{Math.round(data.speed)}km/h</p>
                            </div>
                            <div className="east">
                                <img src={compass} alt="" />
                                <p>East</p>
                            </div>
                        </div>
                    </div>
                    <div className="dayes">
                        <p className='otherdays'>Tuesday</p>
                        <div className="weather">
                            <img src={tuesday} alt="" />
                            <h1>23°C</h1>
                            <p>18°C</p>
                        </div>
                    </div>
                    <div className="days">
                        <p className='otherday'>Wednesday</p>
                        <div className="weather">
                            <img src={wednesday} alt="" />
                            <h1>23°C</h1>
                            <p>18°C</p>
                        </div>
                    </div>
                    <div className="dayes">
                        <p className='otherdays'>Thursday</p>
                        <div className="weather">
                            <img src={thursday} alt="" />
                            <h1>23°C</h1>
                            <p>18°C</p>
                        </div>
                    </div>
                    <div className="days">
                        <p className='otherday'>Friday</p>
                        <div className="weather">
                            <img src={friday} alt="" />
                            <h1>23°C</h1>
                            <p>18°C</p>
                        </div>
                    </div>
                    <div className="dayes">
                        <p className='otherdays'>Saturday</p>
                        <div className="weather">
                            <img src={saturday} alt="" />
                            <h1>23°C</h1>
                            <p>18°C</p>
                        </div>
                    </div>
                    <div className="days">
                        <p className='otherdaye'>Sunday</p>
                        <div className="weather">
                            <img src={sunday} alt="" />
                            <h1>23°C</h1>
                            <p>18°C</p>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default Home