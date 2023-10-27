'use client';
import Image from "next/image";
import { FaShoppingCart, FaUtensils } from "react-icons/fa";
import { 
    StyledWork, 
    StyledWorkContainer, 
    StyledWorkContent1, 
    StyledWorkContent2 
} from './HowItWorks.styled';

const HowItWorks = () => {
  return (
    <StyledWork>
       <h2>How it Works</h2>
       <h4>Maintain your dishes from anywhere.
       Add new dishes, upload photos and enjoy other features.</h4>

        <StyledWorkContainer>
            <StyledWorkContent1>
            <Image
                src='/assets/restaurant.jpg'
                alt='people'
                width={800}
                height={400}
                className='restaurant'
            />

            <div>
                <FaShoppingCart className='shopping-cart' color= '1fa01f' size={50}/>
                <h3>Register your restaurant</h3>
                <p>Chowviville provides a vaiay of business needs, 
                from menu management with various platforms, easily and quickly.</p>
                <button>Get Started</button>
            </div>
            </StyledWorkContent1>

            <StyledWorkContent2>
            <div className=''>
                <FaUtensils className='utensils' color= '#df8b99' size={50}/>
                <h3>Add new dishes to your menu</h3>
                <p>Maintain your dishes from anywhere. 
                Add new dishes, upload photos and enjoy other features</p>
                <button>Get Started</button>
            </div>

            <Image
                src='/assets/bowl.jpg'
                alt='people'
                width={800}
                height={400}
                className='bowl'
            />
            </StyledWorkContent2>
            
        </StyledWorkContainer>

    </StyledWork>
  )
}

export default HowItWorks;
