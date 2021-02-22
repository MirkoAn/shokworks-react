import styled from 'styled-components'

export const Headers = styled.header`
  padding: 37px 50px;
`

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 10px 0 10px;
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
`
export const List = styled.ul`
  display: flex;
  li {
        flex-grow: 1;
        padding-right: 42px;
        font-size: 17px;
      }

  a {
        display: block;
        color: #555555;
     }
`

export const Search = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  input {
    grid-column: 1/3;
    grid-row: 1/2;
    border-radius: 100px;
    border: 1px solid #828282;
    border-radius: 100px;    
  }
  .SearchIcon {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`
