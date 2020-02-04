import React, { Component } from 'react'
import { Container, ContainerText, Logo } from './styles'
import Navbar from '../../components/Navbar'
import eagle from '../../assets/icons/eagle.png'
import Typewriter from 'typewriter-effect'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Logo src={eagle} alt="" />
                <ContainerText>
                    <Typewriter
                        options={{
                            strings: ['Olá, bem vindo ao meu portfólio...', 'sou o Matheus...', 'desenvolvedor web.'],
                            autoStart: true,
                            loop: true,
                            cursor: '|',
                            delay: '50',
                        }}
                    />
                </ContainerText>
                <Navbar />
            </Container>
        )
    }
}
