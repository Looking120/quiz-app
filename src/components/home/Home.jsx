import React from 'react';
import './home.css';
import SocialSection from './SocialSection';
import HomeUs from './HomeUs';
import DownScroll from './DownScroll';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-contain grid">
                    <SocialSection />

                    <div className="img-home"></div>
                    <HomeUs />
                </div>
                <DownScroll />
            </div>
        </section>
    );
}

export default Home;