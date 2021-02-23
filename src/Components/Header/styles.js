import styled from 'styled-components'

import { mediaQueries } from '../../styles/MediaQueries/MediaQueries'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

export const HeaderWrapper = styled.header`
  padding: 20px 10px 0px 20px;
  ${mediaQueries('laptopxl')`
    padding: 58px 245px 64px 60px;
  `}
`

export const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ${mediaQueries('laptop')`
    display: none;
  `}
`

export const Image = styled.img`
  width: 60%;
  ${mediaQueries('tablet')`
    width: 300px;
    height: 28px;
  `}
  ${mediaQueries('laptopxl')`
    width: 331px;
    height: 28px;
  `}
`

export const MenuToggle = styled.div`
  z-index: 1;
  cursor: pointer;
  ${mediaQueries('laptop')`
    display: none;
  `}
`

export const Nav = styled.nav`
  font-family: ${fonttheme.font1};
  text-transform: capitalize;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  ${mediaQueries('laptop')`
    display: flex;
    flex-direction: row;
  `}
`

export const Hover = styled.div`
    ${mediaQueries('laptop')`
      span {
        display: none;
      }
    `}
`

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #185F7F;
`
export const List = styled.ul`

  ${mediaQueries('laptop')`
    display: flex;
    align-items: center;
  `}

  li {
    list-style: none;
    margin-top: 20px;
    ${mediaQueries('laptop')`
    margin-top: 0;
    margin-left: 20px;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
      &:hover {
        span {
          display: block;
        }
      }
    `}
    ${mediaQueries('laptopxl')`
      margin-left: 43px;
    `}
  }

  a {
    color: ${colors.primarycolor};
    &:hover {
      color: ${colors.secondarycolor};
    }
  }
`

export const Search = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 20px;

  ${mediaQueries('laptop')`
    margin-top: 0;
    margin-left: 25px;
  `}

${mediaQueries('laptopxl')`
    margin-left: 63px;
  `}

  input[type="search"]::-webkit-search-cancel-button {
    display: none;
  }

  input {
    grid-column: 1/3;
    grid-row: 1/2;
    width: 280px;
    height: 50px;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #C6BAF8;
    font-family: ${fonttheme.font1};

    &::placeholder {
      color: #CCCCCC;
    }

    &:focus {
      outline: none;
    }
  }
  .SearchIcon {
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 13px 5px;
    cursor: pointer;
    color: #C6BAF8;
  }
`

export const Button = styled.div`
  background: ${colors.btncolor};
  margin-top: 20px;
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  text-align: center;

  ${mediaQueries('laptop')`
    margin-top: 0;  
    margin-left: 25px;
  `}

  ${mediaQueries('laptopxl')`
    margin-left: 42px;
  `}

  a {
    color: ${colors.backgroundcolor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    width: 169px;
    height: 58px;

    &:hover {
      color: ${colors.backgroundcolor};
    }
  }
`

export const LaptopMenu = styled.div`
  display: flex;
  align-items: center;

  ${mediaQueries('laptopxl')`
    justify-content: space-between;
  `}
  img {
    display: none;
    ${mediaQueries('laptop')`
      display: block;
      margin-right: 50px;
    `}
    ${mediaQueries('laptopxl')`
      margin-right: 0px;
    `}
  }
`
