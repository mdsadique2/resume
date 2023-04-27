import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLocationDot, faMobileScreenButton, faFileLines, faGraduationCap, faShapes, faRibbon} from '@fortawesome/free-solid-svg-icons'
import data from './data'

import {ReactComponent as ReactLogo} from './SVG/react.svg';
import {ReactComponent as Css3Logo} from './SVG/css3-alt.svg';
import {ReactComponent as SassLogo} from './SVG/sass.svg';
import {ReactComponent as JsLogo} from './SVG/square-js.svg';
import {ReactComponent as AngularLogo} from './SVG/angular.svg';
import {ReactComponent as Html5Logo} from './SVG/html5.svg';
import {ReactComponent as TypescriptLogo} from './SVG/typescript.svg';
import {ReactComponent as VueLogo} from './SVG/vuejs.svg';

import './style.css';

const iconMaps = {
    location: faLocationDot,
    mobile: faMobileScreenButton,
    email: faAt,
    summary: faFileLines,
    education: faGraduationCap,
    skills: faShapes,
    experience: faRibbon
}


export const IconHeader = ({iconName, headerText, size}) => {
    return (
        <div className={`iconHeader ${size}`}>
             <div className="icon">
                <FontAwesomeIcon icon={iconMaps[iconName]} />
             </div>
             <div className="header">
                {headerText}
             </div>
        </div>
    )
}

export const PersonalDetailsField = ({iconName, label}) => {
    return (
        <div className="personalDetailsField">
            <div className="icon">
                <FontAwesomeIcon icon={iconMaps[iconName]} />
            </div>
            <div className="label">{label}</div>
        </div>
    )
}

export const NameAndDesignation = () => {
    const pd = data.personalDetails;
    return (
        <div className="personalDetails">
            <div className="name"> {pd.name} </div>
            <div className="designation"> {pd.designation} </div> <br/>
            <PersonalDetailsField iconName={'mobile'} label={pd.contact} />
            <PersonalDetailsField iconName={'email'} label={pd.email} />
            <PersonalDetailsField iconName="location" label={pd.location} />
        </div>
    )
}


export const SummarySection = () => {
    const {summary} = data;
    return (
        <div className="summarySection">
           <IconHeader iconName={summary.icon} headerText={summary.label} />
            <div className="bodyText">{summary.text}</div>
        </div>
    )
}


export const EducationSection = () => {
    const {education} = data;
    return (
        <div className="educationSection">
           <IconHeader iconName={education.icon} headerText={education.label} />
            <div className="bodyText">
                {education.values.map((elm, index) => (
                    <div className="educationWrapper">
                        <div className="row courseAndScore flex">
                            <div>{elm.course}</div>
                            <div className="textRight">{elm.score}</div>
                        </div>
                        <div className="row boardAndDuration flex">
                            <div>{elm.board}</div>
                            <div className="textRight">{elm.duration}</div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export const SkillsSection = () => {
    const {skills} = data;
    const fillColor= "#5bd6fe";
    return (
        <div className="skillsSection">
           <IconHeader iconName={skills.icon} headerText={skills.label} />
            <div className="bodyText">
                <div className="skillTag">
                    <Html5Logo fill={fillColor} width="20" height="20"/>
                    <div className="skillTagText">HTML5</div>
                </div>

                <div className="skillTag">
                    <JsLogo fill={fillColor} width="20" height="20"/>
                    <div className="skillTagText">JavaScript</div>
                </div>

                <div className="skillTag">
                    <Css3Logo fill={fillColor} width="20" height="20"/>
                    <div className="skillTagText">CSS3</div>
                </div>

                <div className="skillTag">
                    <ReactLogo fill={fillColor} width="20" height="20"/>
                    <div className="skillTagText">React</div>
                </div>

                <div className="skillTag">
                    <VueLogo fill={fillColor} width="20" height="20"/>
                    <div className="skillTagText">Vue</div>
                </div>

                <div className="skillTag">
                    <AngularLogo fill={fillColor} width="20" height="20"/>
                    <div className="skillTagText">Angular</div>
                </div>

                <div className="skillTag">
                    <TypescriptLogo fill={fillColor} width="20" height="20"/>
                    <div className="skillTagText">Typescript</div>
                </div>

                <div className="skillTag">
                    <SassLogo fill={fillColor} width="20" height="20"/>
                    <div className="skillTagText">Sass</div>
                </div>
            </div>
        </div>
    )
}


export const ExperienceRow = ({experienceData}) => {
    const {company, duration, role, projects, location} = experienceData;
    return (
        <div className="experienceRow">
            <div className="row nameAndDuration flex">
                <div class="companyName">{company}</div>
                <div class="duration">{duration}</div>
            </div>

            <div className="row roleAndLocation flex">
                <div class="role">{role}</div>
                <div class="location">{location}</div>
            </div>
            {
                projects.map((elm, i) => (
                    <div className="projectAndDetails">
                        <div class="project">{elm.name}</div>
                        <div class="details">{elm.description}</div>
                    </div>
                ))
            }
        </div>
    )
}

export const ExperienceSection = () => {
    const {experience} = data; 
    return (
        <div style={{marginTop: '8px'}}>
            <div style={{marginBottom: '20px'}}>
                <IconHeader iconName={experience.icon} headerText={experience.label} size={'large'}/>
            </div>
            {
                experience.values.map((elm, i) => <ExperienceRow key={i} experienceData={elm}/> )
            }
           
        </div>
    )
}