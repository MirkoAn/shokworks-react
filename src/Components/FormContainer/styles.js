import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'

import Background from '../../assets/images/Rectangle511.png'
import Background2 from '../../assets/images/Group2258.png'
import BgArrow from '../../assets/images/Group2794.png'

export const Container = styled.div`
  margin-top: 50px;
  padding: 20px 20px;
  background:
            url(${BgArrow}),
            url(${Background}),
            url(${Background2});
  background-position: top right;
  background-repeat: no-repeat;

  h2 {
    margin-top: 20px;
    font-weight: 500;
    text-align: center;
    font-family: ${fonttheme.font2};
  }

  span {
    font-weight: 600;
  }
`
