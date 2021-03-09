import styled from 'styled-components'

import { mediaQueries } from '../../styles/MediaQueries/MediaQueries'

import * as fonttheme from '../../styles/variables/FontThemes'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 60px;

  li {
    list-style: none;
  }
  
  h2 {
    text-transform: capitalize;
    font-size: 30px;
    font-family: ${fonttheme.font2};
    margin-bottom: 25px;

    ${mediaQueries('laptop')`
    flex-direction: row;
    margin-bottom: 50px;
    font-size: 38px;
  `}
    ${mediaQueries('laptopxl')`
    font-size: 43px;
    margin-bottom: 80px;
  `}
  }
`

export const Column = styled.div`
  ${mediaQueries('laptop')`
    display: flex;
    flex-direction: column;
  `}
`
