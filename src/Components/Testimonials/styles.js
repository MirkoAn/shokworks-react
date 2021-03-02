import styled from 'styled-components'

import { mediaQueries } from '../../styles/MediaQueries/MediaQueries'

import * as fonttheme from '../../styles/variables/FontThemes'

import QuoteLeft from '../../assets/images/quote-left.svg'
import QuoteRight from '../../assets/images/quote-right.svg'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 50px;
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

    ${mediaQueries('laptop')`
      width: 650px;
      padding: 0 40px;
      font-size: 24px;
      background-size: 50px;
    `}
  }

  span {
    font-size: 12px;
    ${mediaQueries('laptop')`
      font-size: 17px;
    `}
  }

  h4 {
    ${mediaQueries('laptop')`
      font-size: 19px;
    `}
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

  ${mediaQueries('laptop')`
      gap: 40px;
    `}

  img {
    width: 10px;
    height: 10px;
    cursor: pointer;

    ${mediaQueries('laptop')`
      width: 18px;
      height: 18px;
    `}
  }
`

export const RichardImg = styled.img`
  display: none;

  ${mediaQueries('laptop')`
    display: block;
    position: absolute;
    top: 0;
    right: 160px;
    width: 80px;
  `}

${mediaQueries('laptopxl')`
    right: 360px;
    width: 110px;
  `}
`

export const RebecaImg = styled(RichardImg)`

  ${mediaQueries('laptop')`
    top: 150px;
    right: 1200px;
    width: 60px;
  `}

  ${mediaQueries('laptopxl')`
      right: 1600px;
      width: 80px;
    `}
`

export const SadieImg = styled(RichardImg)`

  ${mediaQueries('laptop')`
    top: 350px;
    right: 1120px;
    width: 70px;
  `}

  ${mediaQueries('laptopxl')`
    right: 1480px;
    width: 110px;
  `}
`

export const EricImg = styled(RichardImg)`

  ${mediaQueries('laptop')`
    top: 180px;
    right: 50px;
    width: 70px;
  `}

  ${mediaQueries('laptopxl')`
    right: 185px;
  `}
`
