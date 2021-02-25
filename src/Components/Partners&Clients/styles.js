import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  li {
    list-style: none;
  }
  
  h2 {
    text-transform: capitalize;
    font-size: 30px;
    font-family: ${fonttheme.font2};
    margin-bottom: 25px;
  }
`
