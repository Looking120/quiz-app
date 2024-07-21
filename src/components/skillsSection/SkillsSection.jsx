// SkillsSection.jsx
import React from 'react';
import "./SkillsSection.css";
import Frontend from './Frontend';
import Backend from './Backend';
import SkillsBasic from './SilollsBasic';



const SkillsSection = () => {
    return (
        <section className="section__skills section" id="skills">
           <div>
             <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Level</span>

            <div className="skills-container container grid ">
                <Frontend />
                <SkillsBasic />
                <Backend />
            </div>
           </div>
        </section>
    );
}

export default SkillsSection;
