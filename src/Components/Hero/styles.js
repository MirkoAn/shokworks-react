import styled from 'styled-components'

import { mediaQueries } from '../../styles/MediaQueries/MediaQueries'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

import BgImg from '../../assets/images/Group2258.png'

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-image: url(${BgImg});
`

export const Image = styled.img`
  width: 90%;
  ${mediaQueries('laptop')`
    width: 30%;
  `}
`

export const Container = styled.div`
  text-transform: capitalize;
  font-family: ${fonttheme.font1};
  font-size: 20px;
  margin-top: 30px;
  ${mediaQueries('laptop')`
    font-size: 30px;
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
`

export const BlueButton = styled.div`
  background: ${colors.btncolor};
  margin-top: 25px;
  margin-left: 15px;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  ${mediaQueries('laptop')`
    margin-left: 40px;
  `} 

  a {
    ${mediaQueries('laptop')`
    width: 182px;
    height: 62px;
  `} 
    color: ${colors.backgroundcolor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    width: 150px;
    height: 58px;
    font-family: ${fonttheme.font1}
  }
`
export const WhiteButton = styled(BlueButton)`
  background: ${colors.backgroundcolor};
  border: 1px solid ${colors.secondarycolor};
  &:hover {
    background: ${colors.secondarycolor};
    transition: 0.5s;
    a {
      color: ${colors.backgroundcolor};
    }
  }
  a {
    color: ${colors.secondarycolor};
  }
`
