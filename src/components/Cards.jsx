import React, {useState} from 'react'
import styled from 'styled-components';
import cardFont from '../images/bg-card-front.png';
import cardBack from '../images/bg-card-back.png';
import cardLogo from '../images/card-logo.svg';

import bgMobile from '../images/bg-main-mobile.png';
import bgDesktop from '../images/bg-main-desktop.png';


const TopPart = styled.div`
  width: 100%;
  position: relative;
  @media(min-width: 250px) {
    height: 300px;
    background-image: url(${bgMobile});
    background-repeat: no-repeat;
    background-position: center;
  }
  @media(min-width: 375px) {
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-position: center;
  }
`;


const Cards = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10px;
  img {
    width: 300px;
  }
  .cardBack {
    position: absolute;
    top: 100px;
    left: 80px;
    p {
      position: absolute;
      bottom: 78px;
      left: 230px;
      color: var(--white-color);
    }
  }
  .cardFont {
    position: absolute;
    top: 195px;
    left: 10px;
    .logo img{
      width: 50px;
      position: absolute;
      bottom: 120px;
      left: 20px;  
    }
    .card__info {
      position: absolute;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      bottom: 20px;
      width: 100%;
      gap: 10px;
      padding: 0 10px;
      color: #fff;
      .numCard {
        grid-column-start: 1;
        grid-column-end: 4;
        font-size: var(--fs);
      }
      .name {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      .date {
        grid-column-start: 3;
        grid-column-end: 5;
      }
    }
  }
`

const Card = ({numCard, name, dateMM, dateYY, cvc}) => {
    return ( 
      <TopPart>
        <Cards>
          <div className='cardBack'>
            <img src={cardBack} alt="cardBack"/> 
            <p>{cvc}</p>
          </div>
          <div className='cardFont'>
            <img src={cardFont} alt="cardFont"/>
            <div className='logo'>
              <img src={cardLogo}/>
            </div>
            <div className='card__info'>
              <p className='numCard'>{numCard}</p>
              <p className='name'>{name}</p>
              <div className='date'>
                <span className="dateMM">{dateMM}/</span>
                <span className="dateYY">{dateYY}</span>
              </div>
            </div>
          </div>
        </Cards>
      </TopPart>
     );
}
 
export default Card;