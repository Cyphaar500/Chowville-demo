'use client';
import React from 'react';
import Link from "next/link";
import { 
  StyledFooter, 
  StyledCopyright, 
  StyledFooterLinks, 
  StyledFooterFlex 
} from './Footer.styled';

const Footer = () => (
  <StyledFooter>
      <h1 className="gradient__text">Get Connected With Us </h1>
    <StyledFooterLinks>
      <StyledFooterFlex>
        <Link href='/' className=''>
          <h3 className="gradient__text">Chowville</h3>
        </Link>
        <p>About us</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </StyledFooterFlex>
      <StyledFooterFlex>
        <h4>SERVICES</h4>
        <p>Delivery</p>
        <p>Pick Up</p>
        <p>Sell on Chowville</p>
      </StyledFooterFlex>
      <StyledFooterFlex>
        <h4>VENDORS</h4>
        <p>The Place</p>
        <p>Eric's</p>
        <p>Food 'N' More</p>
      </StyledFooterFlex>
      <StyledFooterFlex>
        <h4>CONTACT US</h4>
        <p>chowville@gmail.com</p>
        <p>085-132567</p>
      </StyledFooterFlex>
    </StyledFooterLinks>

    <StyledCopyright>
      <p>@2021 Chowville. All rights reserved.</p>
    </StyledCopyright>
  </StyledFooter>
);

export default Footer;
