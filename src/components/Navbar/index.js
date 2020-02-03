import React, { Component } from 'react'
import { Container, NavbarContainer, FlipContainer, Flipper, Front, Back } from './styles'
import IconHome from '../../assets/icons/home.png'
import IconAbout from '../../assets/icons/about.png'
import IconProjects from '../../assets/icons/projects.png'
import IconContacts from '../../assets/icons/contacts.png'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <Container>

                <NavbarContainer>

                    <Link to={process.env.PUBLIC_URL + '/'}>
                        <FlipContainer>
                            <Flipper>
                                <Front>
                                    <img src={IconHome} alt="Home" />
                                </Front>
                                <Back>
                                    <span>Home</span>
                                </Back>
                            </Flipper>
                        </FlipContainer>
                    </Link>

                    <Link to={process.env.PUBLIC_URL + '/about'}>
                        <FlipContainer>
                            <Flipper>
                                <Front>
                                    <img src={IconAbout} alt="Sobre" />
                                </Front>
                                <Back>
                                    <span>Sobre</span>
                                </Back>
                            </Flipper>
                        </FlipContainer>
                    </Link>

                    <FlipContainer>
                        <Flipper>
                            <Front>
                                <img src={IconProjects} alt="Projetos" />
                            </Front>
                            <Back>
                                <span>Projetos</span>
                            </Back>
                        </Flipper>
                    </FlipContainer>
                    <FlipContainer>
                        <Flipper>
                            <Front>
                                <img src={IconContacts} alt="Contatos" />
                            </Front>
                            <Back>
                                <span>Contatos</span>
                            </Back>
                        </Flipper>
                    </FlipContainer>
                </NavbarContainer>

            </Container>
        )
    }
}