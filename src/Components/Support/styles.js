import styled from 'styled-components'

import { mediaQueries } from '../../styles/MediaQueries/MediaQueries'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

import BgImg from '../../assets/images/Group2258.png'

export const SupportWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${mediaQueries('laptop')`
    flex-direction: row;
    text-align: left;
    margin-left: 150px;
  `}

  ${mediaQueries('laptopxl')`
  gap: 72px;
  `}
`
export const SupportImg = styled.img`
  width: 70%;
  ${mediaQueries('laptopxl')`
      width: 100%;
    `}
`
export const Container = styled.div`

  ${mediaQueries('laptop')`
      width: 540px;
      margin-right: 50px;
    `}
  h2 {
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top: 20px;
    font-family: ${fonttheme.font2};

    ${mediaQueries('laptop')`
      margin-bottom: 40px;
      font-size: 43px;
    `}
  }

  p {
    font-size: 14px;
    font-family: ${fonttheme.font1};
    color: ${colors.primarycolor};
    ${mediaQueries('laptop')`
      font-size: 18px;
    `}
  }
  span {
    font-weight: 600;
  }
`
export const ImgWrapper = styled.div`
  background-image : url(${BgImg});
`
