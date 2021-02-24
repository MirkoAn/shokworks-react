import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

import BgImg from '../../assets/images/Group2258.png'

export const SupportWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const SupportImg = styled.img`
  width: 70%;
`
export const Container = styled.div`
  h2 {
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top: 20px;
    font-family: ${fonttheme.font2};
  }

  p {
    font-size: 14px;
    font-family: ${fonttheme.font1};
    color: ${colors.primarycolor};
  }
  span {
    font-weight: 600;
  }
`
export const ImgWrapper = styled.div`
  background-image : url(${BgImg})
`
