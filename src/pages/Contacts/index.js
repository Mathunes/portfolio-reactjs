import React, { Component } from 'react'
import githubLogo from '../../assets/icons/github.png'
import linkedinLogo from '../../assets/icons/linkedin.png'
import emailLogo from '../../assets/icons/email.png'
import { Container, ContainerContacts } from './styles'
import Navbar from '../../components/Navbar'

export default class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1>Contatos</h1>
                <ContainerContacts>
                    <a href="https://github.com/Mathunes" target="_blank">
                        <img src={githubLogo} alt="Logo github" />
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-antunes-vieira" target="_blank">
                        <img src={linkedinLogo} alt="Logo linkedin" />
                    </a>
                    <a href="mailto:matheusantunes720@gmail.com" target="_blank">
                        <img src={emailLogo} alt="Icone de mensagem" />
                    </a>
                </ContainerContacts>
                <Navbar />
            </Container>
        )
    }
}