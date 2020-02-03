import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #000000;

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

export const ContainerProjects = styled.div`
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #000000;
    margin-bottom: 90px;
    z-index: 1;

    @media (max-width: 600px) {
        & {
            margin-bottom: 75px;
        }
    }

    a {
        width: 40%;
        margin: 20px;

        @media (max-width: 850px) {
            & {
                width: 100%;
            }
        }

        img {
            width: 100%;
            transition: all .1s;

            &:hover {
                cursor: pointer;
            }
        }
    }

`