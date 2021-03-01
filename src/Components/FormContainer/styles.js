import styled from 'styled-components'

import { mediaQueries } from '../../styles/MediaQueries/MediaQueries'

import * as fonttheme from '../../styles/variables/FontThemes'

import Background from '../../assets/images/Rectangle511.png'
import Background2 from '../../assets/images/Group2258.png'
import BgArrow from '../../assets/images/Group2794.png'

export const Container = styled.div`
  margin-top: 50px;
  padding: 20px 20px;
  position: relative;
  background:
            url(${BgArrow}) ,
            url(${Background2}),
            url(${Background});
  background-position: top right;
  background-repeat: no-repeat;

  ${mediaQueries('laptop')`
    background-size: 20%, 100%, 100%, 100%;
    background-position: top 150px left 700px, top right, top right;
  `}

${mediaQueries('laptopxl')`
    background-size: 30%, 100%, 100%, 100%;
    background-position: top 150px left 900px, top right, top right;
  `}

  h2 {
    margin-top: 20px;
    font-weight: 500;
    text-align: center;
    font-family: ${fonttheme.font2};
    ${mediaQueries('laptop')`
      font-size: 32px;
    `}
    ${mediaQueries('laptopxl')`
      font-size: 43px;
    `}
  }

  span {
    font-weight: 600;
  }

  img {
    display: none;

    ${mediaQueries('laptop')`
      display: block;
      width: 400px;
      position: absolute;
      bottom: 60px;
      right: 60px;
    `}
     ${mediaQueries('laptopxl')`
      width: 587px;
      bottom: 60px;
      right: 120px;
    `}
  }
`
