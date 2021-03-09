import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

import { mediaQueries } from '../../styles/MediaQueries/MediaQueries'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:  center;
  text-align: center;
  width: 289px;
  height: 532px;
  padding: 20px 0;
  box-shadow: 0px 10px 30px #99999933;
  font-family: ${fonttheme.font1};
  
  ${mediaQueries('laptopxl')`
    width: 423px;
    height: 532px;
  `}

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    ${mediaQueries('laptopxl')`
    width: 253px;
    height: 255px;
  `}
  }

  p {
    font-size: 14px;
    color: ${colors.primarycolor};
    max-width: 250px;
  }

  h2 {
    font-weight: 400;
    margin-bottom: 19px;  
  }

  span {
    font-weight: 600;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  h2 {
    margin-bottom: 40px;
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 500;
    font-family: ${fonttheme.font2};

    ${mediaQueries('laptopxl')`
      font-size: 43px;
    margin-bottom: 80px;
    `}
  }

  span {
    font-weight: 600;
  }
`
