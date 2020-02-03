import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 70px);

    @media(max-width: 600px) {
        height: calc(100vh - 55px);
    }

    h1 {
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: lighter;
        text-align: center;
        padding: 20px;

        @media(max-width: 600px) {
            font-size: 22px;
        }
    }
`

export const ContainerContacts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    @media (max-width: 450px) {
        & {
            flex-direction: column;
        }
    }

    img {
        margin: 40px;

        &:hover {
            cursor: pointer;
        }

        @media (max-width: 600px) {
            & {
                width: 100px;
            }
        }

        @media (max-width: 450px) {
            & {
                margin: 20px;
                width: 80px;
            }
        }
    }
`