import React, { Component } from 'react'
import { Container, ContainerText } from './styles'
import Navbar from '../../components/Navbar'

export default class Home extends Component {

    state = {
        interval: null
    }

    deleteSpan = phrase => { //Funcao para deletar frase do dom
        if (document.querySelector('div span#text') !== null) {
            let span = document.querySelector('div span#text').innerHTML
            let lenghtTitle = span.length
            let newSpan = ''
            const interval = setInterval(() => {
                for (let i = 0; i < span.length-1; i++) { //Criando nova frase com o span exceto a ultima letra
                    newSpan += span[i]
                }
                document.querySelector('div span#text').innerHTML = newSpan //Substituindo o texto
                newSpan = ''
                lenghtTitle--
                if (lenghtTitle === 0) { //Se a frase ja foi deletada por completo, inicia a digitacao da proxima frase
                    clearInterval(interval)
                    this.typespan(phrase + 1)
                }
                span = document.querySelector('div span#text').innerHTML
            }, 25)
        }
    }
    
    typespan = (phrase = 0) => { //Funcao para digitar frase no dom
        const titles = ['Lorem ipsum', 'is simply dummy text', 'of the printing and typesetting industry.'] //Frases a serem digitadas
        if (phrase >= titles.length) {
            phrase = 0
        }
        let span = document.querySelector('div span#text')
        let j = 0 //Contador para verificar se a frase ja chegou no final
        const title = titles[phrase]
        const lenghtTitle = title.length;

        if (span !== null) {
        this.setState({
            interval: setInterval(() => {
                span.innerHTML += title[j] //Adicionando letra no dom
                j++
                if (j >= lenghtTitle) { //Se a frase chegou no final o intervalo e interrompido para o span ser deletado na funcao deletespan
                    clearInterval(this.state.interval)
                    setTimeout(this.deleteSpan.bind(null, phrase), 2000)
                }
            }, 50)
        })}
    }

    componentDidMount() {
        this.typespan()
    }

    render() {
        
        return (
            <Container>
                <ContainerText>
                    <span id="text"> </span>
                </ContainerText>
                <Navbar />
            </Container>
        )
    }
}