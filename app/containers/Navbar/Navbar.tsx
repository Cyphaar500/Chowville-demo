'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { FaBars } from 'react-icons/fa';
import { 
  StyledNavbar, 
  StyledLogo, 
  StyledLinks, 
  StyledButtons, 
  StyledToggleNavbar, 
  StyledToggleContainer, 
  StyledToggleLinks, 
  StyledToggleButtons 
} from "./Navbar.styled";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <StyledNavbar>
      <StyledLogo>
        <h1 className='gradient__text'>Chowville</h1>
      </StyledLogo>

      <StyledLinks>
        <Link href='./'>Home</Link>
        <Link href='./'>How it works</Link>
        <Link href='./'>FAQs</Link>
        <Link href='./'>Contact</Link>
      </StyledLinks>  

      <StyledButtons>
        <button className="login">Login</button>  
        <button className="signup">Sign Up</button> 
      </StyledButtons>  

      <StyledToggleNavbar>
        {toggleMenu
          ? <FaBars color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <FaBars color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <StyledToggleContainer>
          <StyledToggleLinks>
            <Link href='./'>How it works</Link>
            <Link href='./'>FAQs</Link>
            <Link href='./'>Contact</Link>
          </StyledToggleLinks>
          <StyledToggleButtons>
            <button className="login">Login</button>  
            <button className="signup">Sign Up</button> 
            </StyledToggleButtons>
        </StyledToggleContainer>
        )}
      </StyledToggleNavbar>

    </StyledNavbar>
    
  )
}

export default Navbar;
