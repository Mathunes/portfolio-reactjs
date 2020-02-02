import styled from 'styled-components'

export const Container = styled.div`
    background-color: #171515;
    height: 70px;
`

export const NavbarContainer = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
`

export const FlipContainer = styled.div`
    width: 30px;
    height: 30px;
    perspective: 1000px;
    transition: transform 0.3s;

    &:hover {
        cursor: pointer;

        div:first-child {
            transform: rotateY(180deg);
        }
    }
`

export const Flipper = styled.div`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.3s;
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
`

export const Back = styled(Front)`
    transform: rotateY(180deg);
    background-color: #171515;
    color: #ffffff;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
`