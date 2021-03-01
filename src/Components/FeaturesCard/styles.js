import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:  center;
  text-align: center;
  width: 289px;
  padding: 20px 0;
  box-shadow: 0px 10px 30px #99999933;
  font-family: ${fonttheme.font1};

  img {
    width: 60%;
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
