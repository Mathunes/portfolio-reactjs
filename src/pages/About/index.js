import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import picture from '../../assets/images/picture.jpg'
import htmlIcon from '../../assets/icons/html.png'
import cssIcon from '../../assets/icons/css.png'
import jsIcon from '../../assets/icons/js.png'
import phpIcon from '../../assets/icons/php.png'
import reactjsIcon from '../../assets/icons/reactjs.png'
import jqueryIcon from '../../assets/icons/jquery.svg'
import gitIcon from '../../assets/icons/git.png'
import { Container, Picture, ImagesContainer, FlipContainer, Flipper, Front, Back } from './styles'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Picture src={picture} />
                <p>Sou Matheus Antunes Vieira, estudante de computação - Sistemas de Informação - na Universidade Federal Fluminense. Tenho interesse em desenvolvimento e possuo conhecimento nas tecnologias mencionadas a seguir.</p>
                <ImagesContainer>
                    <FlipContainer>
                        <Flipper>
                            <Front>
                                <img src={htmlIcon} alt="Icone HTML5" />
                            </Front>
                            <Back>
                                <span>HTML5</span>
                            </Back>
                        </Flipper>
                    </FlipContainer>
                    <FlipContainer>
                        <Flipper>
                            <Front>
                                <img src={cssIcon} alt="Icone CSS3" />
                            </Front>
                            <Back>
                                <span>CSS3</span>
                            </Back>
                        </Flipper>
                    </FlipContainer>
                    <FlipContainer>
                        <Flipper>
                            <Front>
                                <img src={jsIcon} alt="Javascript Icone" />
                            </Front>
                            <Back>
                                <span>Javascript</span>
                            </Back>
                        </Flipper>
                    </FlipContainer>
                    <FlipContainer>
                        <Flipper>
                            <Front>
                                <img src={jqueryIcon} alt="Jquery Icone" />
                            </Front>
                            <Back>
                                <span>JQuery</span>
                            </Back>
                        </Flipper>
                    </FlipContainer>
                    <FlipContainer>
                        <Flipper>
                            <Front>
                                <img src={reactjsIcon} alt="React Icone" />
                            </Front>
                            <Back>
                                <span>ReactJS</span>
                            </Back>
                        </Flipper>
                    </FlipContainer>
                    <FlipContainer>
                        <Flipper>
                            <Front>
                                <img src={phpIcon} alt="PHP icone" />
                            </Front>
                            <Back>
                                <span>PHP</span>
                            </Back>
                        </Flipper>
                    </FlipContainer>
                    <FlipContainer>
                        <Flipper>
                            <Front>
                                <img src={gitIcon} alt="GIT icone" />
                            </Front>
                            <Back>
                                <span>GIT</span>
                            </Back>
                        </Flipper>
                    </FlipContainer>
                </ImagesContainer>
                <Navbar />
            </Container>
        )
    }
}