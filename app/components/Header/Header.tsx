'use client';
import Image from "next/image";
import React, { useState } from "react";
import { 
  StyledHeader, 
  StyledHeaderContent, 
  StyledImageContainer 
} from "./Header.styled";

const Header = () => {
  const [getStarted, setGetStarted] = useState('')

  return (
    <StyledHeader>
      <StyledHeaderContent>
        <div>
          <h1>The Online Ordering System For Your Restaurant</h1>
          <p>With Chowville, you can create your own shop in few minutes - Easy setup and immediately ready to use.</p>
          <p>An account gives you access to different features that can help your business to grow.</p>
        </div>

        <div className='get-started'>
          <input 
            className="form-input" 
            value={getStarted} 
            onChange={(e) => setGetStarted(e.target.value)}
            placeholder="Enter your restaurant name"
          />
          <button 
            className="add-btn"
          >
            GET STARTED
          </button>
        </div>
      
      </StyledHeaderContent>
      <StyledImageContainer>
        <Image
          src='/assets/burger.jpg'
          alt='ai'
          width={450}
          height={450}
          className='object-contain'
        />
      </StyledImageContainer>
      
    </StyledHeader>
  )
}

export default Header;





  // <StyledHeaderPeople>
  //   <Image
  //     src='/assets/people.png'
  //     alt='people'
  //     width={181}
  //     height={38}
  //     className='object-contain'
  //   />
  //   <p>Over 10,000 people are using this platform</p>
  // </StyledHeaderPeople>