import React from 'react';
import "./about.css";
import AboutImg from "../../assets/profile.png";
import CV_PDF from "../../assets/Joshua_Cv.pdf";
import UsInfo from './UsInfo';

const About = () => {
    return (
        <section className="about section " id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle"> information for me</span>

            <div className="about-container container grid">
                <img src={AboutImg} alt="" className="about-img" />

                <div className="about-us">
                    <UsInfo />

                    <p className="about-description">
                        Hello My name is Joshua , and I am a young programmer passionate about web development. 
                        With a specialization in front-end programming, 
                        I create modern, intuitive and responsive user interfaces that deliver an exceptional user experience.
                    </p>

                    <a download="" href={CV_PDF} className="button button--flex">
                        Download my cv
                    </a>
                </div>
            </div>
        </section>

    );
}

export default About;