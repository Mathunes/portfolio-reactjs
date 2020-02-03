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
                    <img src={githubLogo} alt="Logo github" />
                    <img src={linkedinLogo} alt="Logo linkedin" />
                    <img src={emailLogo} alt="Icone de mensagem" />
                </ContainerContacts>
                <Navbar />
            </Container>
        )
    }
}