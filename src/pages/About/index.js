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
import { Container, Picture, ImagesContainer } from './styles.js'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Picture src={picture} />
                <p>Sou Matheus Antunes Vieira, estudante de computação - Sistemas de Informação - na Universidade Federal Fluminense. Tenho interesse em desenvolvimento e possuo conhecimento nas tecnologias mencionadas a seguir.</p>
                <ImagesContainer>
                    <img src={htmlIcon} alt="Icone HTML5" />
                    <img src={cssIcon} alt="Icone CSS3" />
                    <img src={jsIcon} alt="Javascript Icone" />
                    <img src={jqueryIcon} alt="Jquery Icone" />
                    <img src={reactjsIcon} alt="React Icone" />
                    <img src={phpIcon} alt="PHP icone" />
                    <img src={gitIcon} alt="GIT icone" />
                </ImagesContainer>
                <Navbar />
            </Container>
        )
    }
}