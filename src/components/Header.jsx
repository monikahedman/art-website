import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../css/header.scss';

library.add(faLinkedin, faInstagram);

export default class Header extends React.Component{

    render(){
        return(
            <div className="header">
                <div className="navbar main">
                    <div className="navbar-text" id="name">Monika Hedman</div>
                    <div className="navbar navbar-text" id="links">
                        <div className="navbar-text link" id="about">About + Contact</div>
                        <div className="navbar-text link" id="resume">Resume</div>
                        <div className="navbar-text" id="social">
                                <FontAwesomeIcon className = "icon link" icon={faLinkedin}/>
                                <FontAwesomeIcon className = "icon link" icon={faInstagram}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}  