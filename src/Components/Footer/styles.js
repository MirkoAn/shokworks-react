import styled from 'styled-components'

import { mediaQueries } from '../../styles/MediaQueries/MediaQueries'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

import Background from '../../assets/images/Group2793.png'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 20px;
  background: url(${Background}) bottom no-repeat;
  font-family: ${fonttheme.font1};

  ${mediaQueries('laptop')`
    height: 90vh;
  `}

  span {
    color: ${colors.ftertitlescolor};
  }
`

export const Img = styled.img`
  width: 60%;
  ${mediaQueries('laptop')`
    width: 484px;
  `}
`
export const List = styled.ul`
  
  li {
    width: 100%;
    cursor: pointer;
    color: ${colors.ftertxtcolor};
    &:hover {
      color: ${colors.secondarycolor};
    }
  }

  a {
    line-height: 30px;
  }
`

export const Container = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }
`

export const Text = styled.p`
  color: ${colors.ftertxtcolor};
  max-width: 250px;
  margin-bottom: 10px;
`
export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const Row = styled.div`
  ${mediaQueries('laptop')`
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin-top: 80px;
  `}
  ${mediaQueries('laptopxl')`
    width: 1500px;
  `}
`
