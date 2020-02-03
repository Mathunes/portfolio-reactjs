import styled from 'styled-components'

export const Container = styled.div`
    background-color: #000000;
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    img {
        height: 100px;
    }
`