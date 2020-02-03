import styled from 'styled-components'

export const Container = styled.div`
    background-color: #000000;
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;

    p {
        color: #ffffff;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export const Picture = styled.img`
    width: 20vw;
    border-radius: 50%;
`

export const ImagesContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;

    img {
        height: 5vw;
    }
`

export const FlipContainer = styled.div`
    width: 100%;
    height: 5vw;
    perspective: 1000px;
    transition: transform 0.3s;

    &:hover {
        cursor: default;

        div:first-child {
            transform: rotateX(180deg);
        }
    }
`

export const Flipper = styled.div`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    position: relative;
`

export const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        img {
            height: 25px;
        }
    }
`

export const Back = styled(Front)`
    transform: rotateX(180deg);
    background-color: #000000;
    color: #ffffff;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;

    @media (max-width: 600px) {
        span {
            font-size: 12px;
        }
    }
`