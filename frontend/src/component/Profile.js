import React from 'react';
import "../style/profile.css";
import order from "../assets/box.png";
import favorite from "../assets/favorite.png";
import user from "../assets/userblack.png";
import Footer from './Footer';
import Header from './Header';

function Profile() {
    return (
        <>
        <Header/>
            <div className='profile'>
                <div className='profile-option'>
                    <ul>
                        <li className='profile-link'>
                            <img src={order} alt="Porositë" />
                            <a href="/profileOrders">Porositë</a>
                        </li>
                        <li className='profile-link'>
                            <img src={favorite} alt="Të preferuara" />
                            <a href="/favorite">Të preferuara</a>
                        </li>
                        <li className='profile-link'>
                            <img src={user} alt="Profili" />
                            <a href="/profileEdit">Profili</a>
                        </li>
                    </ul>
                </div>
                <div className='welcome-wrapper'>
                    <h3 className='animated-text'>Mirë se erdhe në profilin tënd!</h3>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;
