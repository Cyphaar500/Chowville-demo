import styled from "styled-components";



export const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem 0;
    padding: 1rem 20rem;
    text-align: center;
    text-decoration: none;
    letter-spacing: 1px;
    // max-width: 100%;

    h1 {
        font-family: var(--font-family);
        font-size: xx-large;
        font-weight: bolder;
    }

    h2 {
        margin: 1rem;
        font-family: var(--font-family);
        font-size: larger;
        font-weight: bolder;
    }

    @media screen and (max-width: 1080px) {
        padding: 1rem 15rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem;

        h1 {
            font-size: x-large;
            font-weight: bolder;
        }

        h2 {
            font-size: large;
        }
    }
`

export const StyledContactForm = styled.form`
    display: inline-block;

    .form-inputs {
        display: block;
        margin: 1rem 7.5rem;
        padding: 1rem 37rem 1rem 1rem;
        letter-spacing: 1px;
        border: 1px solid #ebe8e8;
        background-color: white;
        border-radius: 0.25rem;
        box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.329);

        &:focus {
            outline: none;
        }
    }

    .textarea {
        margin-left: 2rem;
        padding: 1rem;
        max-width: 51.5rem;
        font-size: larger;
        letter-spacing: 1px;
        border: 1px solid #ebe8e8;
        text-decoration: none;
        box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.329);

        &:focus {
            outline: none;
        }
    }

    .form-button {
        display: block;
        color: white;
        border-radius: 5px;
        border: 1px solid #ebe8e8;
        align-self: center;
        background-color: #1fa01f;
        margin: 1rem 7.5rem;
        padding: 1rem 20.4rem;
        cursor: pointer;
        font-size: x-large;
        font-weight: bolder;

        &:hover {
            background-color: green;
        }
    }

    @media screen and (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;

        .form-inputs {
            margin: 0.6rem 1rem;
            padding: 1rem 20rem 1rem 1rem;
        }
    
        .textarea {
            margin: 1rem;
            padding: 1rem;
            max-width: 31.2rem;
            font-size: large;
        }

        .form-button {
            margin: 0 1rem;
            padding: 1rem 11.1rem;
            cursor: pointer;
            font-size: large;
            font-weight: 800;
        }
    }

    @media screen and (max-width: 768px) {
        .form-inputs {
            display: block;
            margin: 0.6rem 1rem;
            padding: 1rem 15rem 1rem 1rem;
        }
    
        .textarea {
            margin: 1rem;
            padding: 1rem;
            max-width: 30.7rem;
            font-size: large;
        }

        .form-button {
            margin: 0 1rem;
            padding: 1rem 11rem;
            cursor: pointer;
            font-size: large;
            font-weight: 800;
        }
    }
`



  
