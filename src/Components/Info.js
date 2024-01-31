import React from 'react';
import './InfoStyles.css';
import ab from "../Components/ab.jpg";

const Info = () => {
    return (
        <div className='a-container'>
            <div className='image-container'>
                <img className='abu-bakar' src={ab} alt='ab' />
            </div>
            <div className='info-container'>
                <h2>Hi, I am <span>Abu-Bakar Developer</span></h2>
            <div className='address'>
                <div className='name'>
                    <ul>
                        <li className='add'>
                            <h3>First Name</h3>
                            <p>: Abu-bakar</p>
                        </li>
                    </ul>
                </div>
                <div className='last'>
                    <ul>
                        <li className='add'>
                            <h3>Last Name</h3>
                            <p>: Developer</p>
                        </li>
                    </ul>
                </div>
                <div className='ages'>
                    <ul>
                        <li className='add'>
                            <h3>Age</h3>
                            <p>: 22</p>
                        </li>
                    </ul>
                </div>
                <div className='lives'>
                    <ul>
                        <li className='add'>
                            <h3>Nationality</h3>
                            <p>: Pakistan</p>
                        </li>
                    </ul>
                </div>
                <div className='lang'>
                    <ul>
                        <li className='add'>
                            <h3>Language</h3>
                            <p>: English, Urdu</p>
                        </li>
                    </ul>
                </div>
                <div className='place'>
                    <ul>
                        <li className='add'>
                            <h3>Address</h3>
                            <p>: 40 More Jaranwala, Pakistan</p>
                        </li>
                    </ul>
                </div>
                <div className='avail'>
                    <ul>
                        <li className='add'>
                            <h3>Availability</h3>
                            <p>: Freelance and job both.</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Info;

