import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

import BgImg from '../../assets/images/Group2258.png'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  text-align: center;

`
export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px auto;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  width: 160px;
  height: 58px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    font-family: ${fonttheme.font1};
  }
`
export const Wrapper = styled.div`

  p {
    font-size: 14px;
    font-family: ${fonttheme.font1};
    color: ${colors.primarycolor};
  }

  h2 {
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 30px;
    font-family: ${fonttheme.font2}
  }

  span {
    font-weight: bold;
  }
`
export const BuildImage = styled.img`
  width: 90%;
`

export const ImgWrapper = styled.div`
  background-image : url(${BgImg})
`
