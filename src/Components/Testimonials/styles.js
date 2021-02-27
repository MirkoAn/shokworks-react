import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'

import QuoteLeft from '../../assets/images/quote-left.svg'
import QuoteRight from '../../assets/images/quote-right.svg'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-family: ${fonttheme.font2};


  p {
    color: #333333;
    padding: 0 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    background-image:
                  url(${QuoteLeft}),
                  url(${QuoteRight});
    background-size: 25px;
    background-position: top left, top right;
    background-repeat: no-repeat;
  }

  span {
    font-size: 12px;
  }
`

export const AvatarImg = styled.img`
  width: 80%;
`

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 18px;

  img {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
`
