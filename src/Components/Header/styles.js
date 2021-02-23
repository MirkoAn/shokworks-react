import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

export const HeaderWrapper = styled.header`
  padding: 20px 10px 0px 20px;
`

export const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const Image = styled.img`
  width: 60%;
`

export const MenuToggle = styled.div`
  z-index: 1;
  cursor: pointer;
`

export const Nav = styled.nav`
  font-family: ${fonttheme.font1};
  text-transform: capitalize;
  position: fixed;
  display: ${(props) => (props.open ? 'flex' : 'none')};
`

export const List = styled.div`

  li {
    list-style: none;
    margin-top: 20px;
  }

  a {
    color: ${colors.primarycolor};
    &:hover {
      color: ${colors.secondarycolor};
    }
  }
  
  /* display: flex;
  li {
        flex-grow: 1;
        padding-right: 42px;
        font-size: 17px;
      }

  a {
        display: block;
        color: #555555;
     } */
`

export const Search = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 20px;

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
