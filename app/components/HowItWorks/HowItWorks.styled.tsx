import styled from "styled-components";



export const StyledWork = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;
    text-decoration: none;
    letter-spacing: 1px;

    h2 {
        margin: 1rem 0;
        font-family: var(--font-family);
        font-size: x-large;
        font-weight: bolder;

        @media screen and (max-width: 1080px) {
            margin: 1rem 0;
        }

        @media screen and (max-width: 768px) {
            margin-top: 3rem;
            font-size: larger;
            font-weight: bolder;
        }
    }

    h3 {
        margin: 1rem 0;
        font-family: var(--font-family);
        font-size: large;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 1rem;
            font-weight: bold;
        }
    }

    h4 {
        margin-left: 1.5rem;
        font-family: var(--font-family);
        font-size: large;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 1rem;
            font-weight: bold;
        }
    }

    p  {
        font-family: var(--font-family);
        font-size: 1rem;
        font-weight: 200;
    }

    button {
        margin: 1rem 0;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: #d7d7d7;
        font-family: var(--font-family);

        &:hover {
            color: #fff;
            font-weight: 600;
            background-color: grey;
        }
    }

    @media screen and (max-width: 1080px) {
        padding: 1rem 2rem;
    }

    @media screen and (max-width: 768px) {
        padding: 0 2rem;
    }
`

export const StyledWorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
    padding: 4rem 8rem;

    .restaurant {
        margin-right: 15rem;
        width: 52rem;
        height: 18rem;

        @media screen and (max-width: 1080px) {
            margin-right: 7rem;
            width: 25rem;
            height: 18rem;
        }

        @media screen and (max-width: 768px) {
            margin: 2rem 1rem;
            width: 80rem;
            height: 15rem;
        }
    }

    .bowl {
        margin-left: 15rem;
        width: 45rem;
        height: 18rem;

        @media screen and (max-width: 1080px) {
            margin-left: 10rem;
            width: 54rem;
            height: 19rem;
        }

        @media screen and (max-width: 768px) {
            margin: 2rem 1rem;
            width: 70rem;
            height: 15rem;
        }
    }

    .shopping-cart {
        background-color: #e7e7e7;
        border-radius: 50%;
        padding: 0.25rem 1rem;
    }

    .utensils {
        background-color: #e7e7e7;
        border-radius: 50%;
        padding: 0.25rem 1rem;
    }

    @media screen and (max-width: 1080px) {
        margin: 0;
        padding: 2rem;
    }

    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 2rem;
    }
`

export const StyledWorkContent1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1080px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const StyledWorkContent2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`






  
