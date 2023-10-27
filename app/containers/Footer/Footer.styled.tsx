import styled from "styled-components";



export const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #333;

    h1 {
        margin: 1rem;
        font-family: var(--font-family);
        font-weight: 800;       
        font-size: 60px;
        line-height: 75px;
    }

    @media screen and (max-width: 768px) {
    h1 {
            font-size: 30px;
            line-height: 50px;
        }
    }
`

export const StyledFooterLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;
    margin: 1rem;
    text-align: left;
`

export const StyledFooterFlex = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    h3 {
        margin: 0;
        font-style: italic;
        font-size: 1.3rem;
        font-weight: bolder;
    }

    h4 {
        padding-top: 0.25rem;
        color: #fff;
        font-size: large;
        font-weight: bolder;
    }

    p  {
        margin: 0.25rem 0;
        font-size: 1rem;
        font-family: var(--font-family);
        line-height: 21px;
        color: #fff;
        word-spacing: 1px;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;

        h3 {
            padding-top: 0.125rem;
            font-style: italic;
            font-size: 1.1rem;
            font-weight: bolder;
        }
    
        h4 {
            padding-top: 0.25rem;
            color: #fff;
            font-size: 1rem;
            font-weight: bolder;
        }
    
        p  {
            margin: 0.25rem 0;
            font-size: 0.8rem;
            font-family: var(--font-family);
            line-height: 21px;
            color: #fff;
            cursor: pointer;
            word-spacing: 1px;
        }
`

export const StyledCopyright = styled.div`
    margin: 0;
    padding: 1rem 0;
    text-align: center;
    width: 100%;

    p {
        font-size: 12px;
        font-family: var(--font-family);
        line-height: 20px;
        color: #fff;
    }
`








// .gpt3__footer {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     background: var(--color-footer);
// }

// .gpt3__footer-heading {
//     width: 100%;
//     text-align: center;

//     margin-bottom: 3rem;
// }

// .gpt3__footer-heading h1 {
//     font-family: var(--font-family);
//     font-weight: 800;
//     font-size: 64px;
//     line-height: 75px;
// }

// .gpt3__footer-paragraph {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-family: var(--font-family);
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 24px;
//     text-align: center;

//     margin-bottom: 10rem;
//     cursor: pointer;
//     font-family: var(--font-family);
//     color: var(--color-text);
// }

// .gpt3__footer-btn p {
//     font-size: 18px;
//     font-family: var(--font-family);
//     line-height: 21px;
//     color: #fff;
//     word-spacing: 2px;
// }

// .gpt3__footer-links {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     flex-direction: row;
//     flex-wrap: wrap;

//     width: 100%;
//     text-align: left;
// }

// .gpt3__footer-links div {
//     width: 200px;
//     margin: 1rem;
// }

// .gpt3__footer-links_logo {
//     display: flex;
//     flex-direction: column;
// }

// .gpt3__footer-links_logo img {
//     width: 50px;
//     height: 30px;

//     margin-bottom: 1rem;
// }

// .gpt3__footer-links_logo p {
//     font-family: var(--font-family);
//     font-size: 12px;
//     line-height: 15px;
//     color: #fff;
// }

// .gpt3__footer-links_div {
//     display: flex;
//     justify-content: flex-start;
//     flex-direction: column;
// }

// .gpt3__footer-links_div h4 {
//     font-size: 16px;
//     line-height: 17px;
//     font-family: var(--font-family);
//     color: #bb9292;

//     margin-bottom: 0.9rem;
// }

// .gpt3__footer-links_div p {
//     font-size: 12px;
//     line-height: 15px;
//     font-family: var(--font-family);
//     color: #fff;

//     margin: 0.5rem 0;
//     cursor: pointer;
// }

// .gpt3__footer-copyright {
//     margin-top: 2rem;
//     text-align: center;
//     width: 100%;
// }

// .gpt3__footer-copyright p {
//     font-size: 12px;
//     font-family: var(--font-family);
//     line-height: 15px;
//     color: #fff;
// }

// @media screen and (max-width: 850px) {
//     .gpt3__footer-heading h1 {
//         font-size: 44px;
//         line-height: 50px;
//     }
// }

// @media screen and (max-width: 550px) {
//     .gpt3__footer-heading h1 {
//         font-size: 34px;
//         line-height: 42px;
//     }

//     .gpt3__footer-links div {
//         margin: 1rem 0;
//     }
// }

// @media screen and (max-width: 400px) {
//     .gpt3__footer-heading h1 {
//         font-size: 27px;
//         line-height: 38px;
//     }
// }