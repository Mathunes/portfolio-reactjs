import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import { Container, ContainerProjects } from './styles'
import vagalumeProject from '../../assets/images/1.png'
import githubProject from '../../assets/images/2.png'
import pixabayProject from '../../assets/images/3.png'
import memoryGameProject from '../../assets/images/4.png'
import smashBugProject from '../../assets/images/5.png'
import timeLineProject from '../../assets/images/6.png'

export default class Projects extends Component {
    render() {
        return (
            <Container>
                <h1>Projetos</h1>
                <ContainerProjects>
                    <a href={process.env.PUBLIC_URL + 'https://consuming-vagalume-api-reactjs.herokuapp.com/'} target="_blank" rel="noopener noreferrer">
                        <img src={vagalumeProject} alt="Projeto vagalume API" />
                    </a>
                    <a href={process.env.PUBLIC_URL + 'https://mathunes.github.io/consuming-github-api-react-redux/'} target="_blank" rel="noopener noreferrer">
                        <img src={githubProject} alt="Projeto github API" />
                    </a>
                    <a href={process.env.PUBLIC_URL + 'https://mathunes.github.io/consuming-pixabay-api-react-redux/'} target="_blank" rel="noopener noreferrer">
                        <img src={pixabayProject} alt="Projeto pixabay API" />
                    </a>
                    <a href={process.env.PUBLIC_URL + 'https://mathunes.github.io/memory-game/'} target="_blank" rel="noopener noreferrer">
                        <img src={memoryGameProject} alt="Projeto jogo da memória" />
                    </a>
                    <a href={process.env.PUBLIC_URL + 'https://smashbug.000webhostapp.com/index.php'} target="_blank" rel="noopener noreferrer">
                        <img src={smashBugProject} alt="Projeto smashbug" />
                    </a>
                    <a href={process.env.PUBLIC_URL + 'https://mathunes.github.io/timeline/'} target="_blank" rel="noopener noreferrer">
                        <img src={timeLineProject} alt="Projeto timeline" />
                    </a>
                </ContainerProjects>
                <Navbar />
            </Container>
        )
    }
}