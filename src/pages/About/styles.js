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

    @media(max-width: 600px) {
        height: calc(100vh - 55px);
    }

    p {
        color: #ffffff;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 50vw;

        @media (max-width: 850px) {
            & {
                width: 60vw;
            }
        }

        @media (max-width: 600px) {
            & {
                width: 90vw;
                font-size: 14px;
            }
        }
    }
`

export const Picture = styled.img`
    width: 15vw;
    border-radius: 50%;
    border: 4px solid #ffffff;

    @media (max-width: 850px) {
        & {
            width: 30vw;
        }
    }

    @media (max-width: 600px) {
        & {
            width: 40vw;
        }
    }
`

export const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
        height: 5vw;
        margin: 10px;
                
        @media (max-width: 850px) {
            & {
                height: 7vw;
            }        
        }

        @media (max-width: 500px) {
            & {
                height: 50px;
            }        
        }
    }
`
