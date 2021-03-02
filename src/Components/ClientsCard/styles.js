import styled from 'styled-components'

import { mediaQueries } from '../../styles/MediaQueries/MediaQueries'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 30px #99999933;
  border-radius: 8px;
  width: 295px;
  height: 280px;
  cursor: pointer;

  a {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.secondarycolor};
    font-family: ${fonttheme.font1};
  }
`
export const CardImg = styled.img`
  width: 70%;
`

export const Rows = styled.div`
   ${mediaQueries('laptop')`
      display:flex;
      flex-direction: row;
      gap: 40px;
    `}
`
