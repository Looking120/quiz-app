import React from 'react';

const UsInfo = () => {
    return (
        <div className="about-info grid">
            <div className="about-box "> 
            <i class='bx bx-like about-icon'></i>
                <h3 className="about-title">Experience</h3>
                <div className="about-subtitle"> one year of experience</div>
            </div>

            <div className="about-box"> 
            <i class='bx bxs-blanket  about-icon'></i>
                <h3 className="about-title">already finished</h3>
                <div className="about-subtitle">+3 project</div>
            </div>

            <div className="about-box "> 
            <i class='bx bx-slideshow about-icon'></i>
                <h3 className="about-title">support</h3>
                <div className="about-subtitle">I'm online 24/7</div>
            </div>
        </div>
    );
}

export default UsInfo;