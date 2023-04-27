import React from 'react';
import {NameAndDesignation, SummarySection, EducationSection, SkillsSection, ExperienceSection} from './ComponentChunks'
import './style.css';




export const Resume = () => {
    return (
        <div className="resumePageContainer">
            <section className="resumePage">
                <section className="leftColumn">
                    <div className="moduleSection"><NameAndDesignation/></div>
                    <div className="moduleSection"><SummarySection/></div>
                    <div className="moduleSection"><EducationSection/></div>
                    <div className="moduleSection"><SkillsSection/></div>
                </section>
                <section className="rightColumn">
                    <div className="moduleSection" style={{marginTop: '8px', marginBottom: '0px'}}><ExperienceSection/></div>
                </section>
            </section>
        </div>
    )
}


export default Resume;