import styled from "styled-components";



export const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #e9dbdb;
    padding: 1rem 1rem 2.5rem;

    @media screen and (max-width: 768px) {
        display: flex;
        padding: 2rem;
        justify-content: space-between;

        h1 {
            margin-right: 17.5rem;
        }
    }

    @media screen and (max-width: 550px) {
        display: flex;
        padding: 1rem;
        justify-content: space-between;
    }
`

export const StyledLogo = styled.div`
    margin-right: 1rem;

    h1 {
        color: #1fa01f;
        padding-left: 2rem;
        cursor: pointer;
        font-family: var(--font-family);
        font-size: xx-large;
        font-style: italic;
        font-weight: bolder;
    }
`

export const StyledLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;
    align-items: center;
    font-size: large;
    font-weight: bolder;

    &:hover {
        color: black;
        font-weight: bolder;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 550px) {
        display: none;
    }
`

export const StyledButtons = styled.div`
    display: flex;
    gap: 20px;
    font-size: large;
    font-weight: bolder;

    .login {
        margin-right: 1rem;
        padding: 0.25rem 2.5rem;
        color: #fff;
        background-color: #1fa01f;
        border-radius: 1rem;

        &:hover {
            cursor: pointer;
            background-color: green;
        }
    }

    .signup {
        padding: 0.25rem 2rem;
        color: #fff;
        background-color: #233;
        border-radius: 1rem;

        &:hover {
            cursor: pointer;
            background-color: black;
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const StyledToggleNavbar = styled.div `
    margin-left: 1rem;
    display: none;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
        margin-right: 0;
    }

    @media screen and (max-width: 550px) {
        display: block;
    }
`

export const StyledToggleContainer = styled.div `
   display: flex;
   justify-content: center;
   flex-direction: column;
   color: #fff;
   background-color: #333;
   padding: 1rem 3rem;
   position: absolute;
   right: 0;
   top: 30px;
   margin-top: 1rem;
   border-radius: 5px;
   box-shadow: 0px 0px 5px rgba(0,0, 0,0.2); 
`

export const StyledToggleLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: center;
    font-size: large;

    a {
        &:hover {
            font-weight: bolder;
        }
    }
`

export const StyledToggleButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-size: large;
    font-weight: bolder;

    .login {
        padding: 0.25rem 3rem;
        color: #fff;
        background-color: #1fa01f;
        border-radius: 1rem;

        &:hover {
            cursor: pointer;
            background-color: #008000;
        }
    }

    .signup {
        padding: 0.25rem 2.4rem;
        color: #fff;
        background-color: #d10505;
        border-radius: 1rem;

        &:hover {
            cursor: pointer;
            background-color: #000;
        }
    }

    @media screen and (max-width: 768px) {
        // display: none;
    }
`