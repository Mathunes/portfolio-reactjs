import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import { Container, ContainerProjects, HoverProject } from './styles'
import vagalumeProject from '../../assets/images/1.png'
import githubProject from '../../assets/images/2.png'
import pixabayProject from '../../assets/images/3.png'
import memoryGameProject from '../../assets/images/4.png'
import timeLineProject from '../../assets/images/6.png'
import weatherAppProject from '../../assets/images/7.png'
import enemGoAppProject from '../../assets/images/8.png'

export default class Projects extends Component {
    render() {
        return (
            <Container>
                <h1>Projetos</h1>
                <ContainerProjects>
                    <a href={'https://play.google.com/store/apps/details?id=com.enemgomobile'} target="_blank" rel="noopener noreferrer">
                        <img src={enemGoAppProject} alt="Enem Go" />
                        <HoverProject>
                            <h2>Enem Go</h2>
                            <span>Enem Go é um aplicativo que usa conceitos de gamificação para estimular o processo preparatório para realização do Exame Nacional do Ensino Médio</span>
                        </HoverProject>
                    </a>
                    <a href={'https://mathunes.github.io/weather-app'} target="_blank" rel="noopener noreferrer">
                        <img src={weatherAppProject} alt="Projeto vagalume API" />
                        <HoverProject>
                            <h2>Previsão do tempo</h2>
                            <span>Aplicação desenvolvida para consumir dados da API do Open Weather Map com ReactJS</span>
                        </HoverProject>
                    </a>
                    <a href={'https://mathunes.github.io/consuming-vagalume-api-reactjs/'} target="_blank" rel="noopener noreferrer">
                        <img src={vagalumeProject} alt="Projeto vagalume API" />
                        <HoverProject>
                            <h2>Vagalume Clone</h2>
                            <span>Aplicação desenvolvida para consumir dados da API do Vagalume com ReactJS</span>
                        </HoverProject>
                    </a>
                    <a href={'https://mathunes.github.io/consuming-github-api-react-redux/'} target="_blank" rel="noopener noreferrer">
                        <img src={githubProject} alt="Projeto github API" />
                        <HoverProject>
                            <h2>Github Clone</h2>
                            <span>Aplicação desenvolvida para consumir dados da API do Github com ReactJS</span>
                        </HoverProject>
                    </a>
                    <a href={'https://mathunes.github.io/consuming-pixabay-api-react-redux/'} target="_blank" rel="noopener noreferrer">
                        <img src={pixabayProject} alt="Projeto pixabay API" />
                        <HoverProject>
                            <h2>Pixabay Clone</h2>
                            <span>Aplicação desenvolvida para consumir dados da API do Pixabay com ReactJS</span>
                        </HoverProject>
                    </a>
                    <a href={'https://mathunes.github.io/memory-game/'} target="_blank" rel="noopener noreferrer">
                        <img src={memoryGameProject} alt="Projeto jogo da memória" />
                        <HoverProject>
                            <h2>Jogo da memória</h2>
                            <span>Jogo da memória desenvolvido com JavaScript</span>
                        </HoverProject>
                    </a>
                    {/* <a href={'https://smashbug.000webhostapp.com/index.php'} target="_blank" rel="noopener noreferrer">
                        <img src={smashBugProject} alt="Projeto smashbug" />
                        <HoverProject>
                            <h2>Jogo SmashBug</h2>
                            <span>Jogo de esmagar insetos desenvolvido com HTML, CSS, JavaScript, JQuery e PHP</span>
                        </HoverProject>
                    </a> */}
                    <a href={'https://mathunes.github.io/timeline/'} target="_blank" rel="noopener noreferrer">
                        <img src={timeLineProject} alt="Projeto timeline" />
                        <HoverProject>
                            <h2>Linha do tempo</h2>
                            <span>Linha do tempo desenvolvida com HTML e CSS</span>
                        </HoverProject>
                    </a>
                </ContainerProjects>
                <Navbar />
            </Container>
        )
    }
}