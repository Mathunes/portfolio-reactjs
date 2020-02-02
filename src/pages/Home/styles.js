import styled from 'styled-components';
import bgImage from '../../assets/images/bg-img.png'
import bgImageSmall from '../../assets/images/bg-img-small.png'

export const Container = styled.div`
    background: url(${bgImage}) no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    height: calc(100vh - 70px);
    padding: 0 20px;
    display: flex;
    justify-content: center;

    @media(max-width: 600px) {
        background-image: url(${bgImageSmall});
        height: calc(100vh - 55px);
    }

    img {
        position: absolute;
        width: 50px;
        margin-top: 20px;
        
        @media (max-width: 600px) {
            & {
                width: 35px;
            }
        }

        &:hover {
            animation-name: fly;
            animation-iteration-count: infinite;
            animation-duration: .9s;
        }

        @keyframes fly {
            0% {
                margin-top: 20px;
            }

            25% {
                margin-top: 10px;
            }

            50% {
                margin-top: 20px;
            }

            75% {
                margin-top: 30px;
            }

            100% {
                opacity: 20%;
            }
        }
    }
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: center;

    span {
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
        font-size: 36px;
        font-weight: normal;

        @media(max-width: 600px) {
            font-size: 26px;
        }

        &::after {
            content: '|';
            font-weight: normal;
            animation-name: insertion-point;
            animation-iteration-count: infinite;
            animation-duration: 0.6s;
        }

        @keyframes insertion-point {
            0% {
                opacity: 0%;
            }

            100% {
                opacity: 100%;
            }
        }

    }
`