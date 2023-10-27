import styled from "styled-components";



export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem 3rem;
    padding: 5rem 7rem;

    @media screen and (max-width: 1080px) {
        display: flex;
        margin: 2rem;
        padding: 2rem;
        flex-direction: row;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        /* margin: 1rem; */
        padding: 2rem;
        flex-direction: column;
        justify-content: center;
    }
`

export const StyledHeaderContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 10rem;

    @media screen and (max-width: 1080px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 3rem 0;
    }

    h1 {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: xx-large;
        line-height: 3rem;
        letter-spacing: -0.02em;

        @media screen and (max-width: 1080px) {
            font-weight: bolder;
            font-size: x-large;
            line-height: 2rem;
            letter-spacing: -0.02em;
        }

        @media screen and (max-width: 768px) {
            font-weight: bolder;
            font-size: x-large;
            line-height: 2rem;
            letter-spacing: -0.02em;
        }
    }

    p {
       font-family: var(--font-family);
       font-size: 1rem;
       font-weight: 400;
       line-height: 1.4rem;
   
       margin: 1rem 0;
    }

    .get-started {
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
    }

    .form-input {
        font-size: small;
        font-weight: bolder;
        padding: 0.5rem 3rem 0.5rem 0.25rem;
        border: 1px solid #ebe8e8;
        background-color: white;
        border-radius: 0.25rem;

        &:focus {
            outline: none;
        }
    }

    button {
        font-size: small;
        padding: 0 1rem;
        color: #fff;
        background-color: #1fa01f;
        border: none;
        border-radius: 0 0.25rem 0.25rem 0;

        &:hover {
            cursor: pointer;
            background-color: green;
        }

        @media screen and (max-width: 1080px) {
            font-size: x-small;
            font-weight: bolder;
            padding: 0 1rem;
            background-color: #1fa01f;
            border-radius: 0.5rem;
        }
    }
`

export const StyledImageContainer = styled.div`
    display: relative;
`

export const StyledHeaderPeople = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    margin: 2rem 0;

    p {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 1rem;
        line-height: 2rem;
        text-align: center;
    }
`


// .gpt3__header-content p {
//     font-family: var(--font-family);
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 28px;
//     color: var(--color-text);

//     margin-top: 1.5rem;
// }

// .gpt3__header-content__input {
//     width: 100%;
//     margin: 2rem 0 1rem;

//     display: flex;
//     flex-direction: row;
// }

// .gpt3__header-content__button button {
//     flex: 0.6;
//     width: 100%;
//     margin: 1rem 0;
//     min-height: 50px;
//     font-family: var(--font-family);
//     font-weight: 400;
//     font-size: 15px;
//     line-height: 28px;
//     background: #FF4820;
//     border: 2px solid #FF4820;
//     padding: 0 1rem;
//     color: #fff;
//     cursor: pointer;
//     outline: none;

//     border-radius: 25px;
// }

// .gpt3__header-content__people {
//     width: 100%;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-direction: row;

//     margin-top: 2rem;
// }

// .gpt3__header-content__people p {
//     margin: 0 0 0 1rem;
//     font-family: var(--font-family);
//     font-weight: 500;
//     font-size: 12px;
//     line-height: 38px;
//     color: #fff;
//     text-align: center;
// }

// .gpt3__header-image {
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .gpt3__header-image img {
//     width: 100%;
//     height: 100%;
// }

// @media screen and (max-width: 1050px) {
//     .gpt3__header {
//         flex-direction: column;
//     }

//     .gpt3__header-content {
//         margin: 0 0 3rem;
//     }
// }

// @media screen and (max-width: 650px) {
//     .gpt3__header-content h1 {
//         font-size: 40px;
//         line-height: 48px;
//     }

//     .gpt3__header-content p {
//         font-size: 16px;
//         line-height: 24px;
//     }
    
//     .gpt3__header-content__people {
//         flex-direction: column;
//     }

//     .gpt3__header-content__people p {
//         margin: 0;
//     }

//     .gpt3__header-content__input input,
//     .gpt3__header-content__input button {
//         font-size: 16px;
//         line-height: 24px;
//     }
// }

// @media screen and (max-width: 490px) {
//     .gpt3__header-content h1 {
//         font-size: 36px;
//         line-height: 48px;
//     }

//     .gpt3__header-content p {
//         font-size: 14px;
//         line-height: 24px;
//     }

//     .gpt3__header-content__input input,
//     .gpt3__header-content__input button {
//         font-size: 12px;
//         line-height: 16px;
//     }
// }














// .input-container {
//     background-color: white;
//     margin-top: 2rem;
//     border-radius: 0.25rem;
//     padding: 1rem;
//     box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.329);
//     display: flex;
//     justify-content: space-between;
// }

// .input {
//     border: none;
//     width: 90%
// }

// .input:focus {
//     outline: none;
// }

// .add-btn {
//     border: none;
//     padding: 0.3rem 2rem;
//     border-radius: 0.2rem;
//     background-color: rgb(53, 201, 157);
//     color: white;
//     font-weight: 900;
// }