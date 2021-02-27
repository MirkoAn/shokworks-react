import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 20px 60px #3E3E3E29;
  border-radius: 8px;
  padding: 72px 63px;
  margin: 40px auto;
  background-color: ${colors.backgroundcolor};
  font-family: ${fonttheme.font1};

  label {
    font-weight: 600;
  }

  input  {
        display: block;
        width: 100%;
        border: none;
        margin-top: 30px;
        margin-bottom: 20px;
        border-bottom: 1px solid #C2C2C2;

        &:focus {
            outline: none;
        }
  }
  select {
        width: 100%;
        border: none;
        margin-top: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #C2C2C2;
        color: ${colors.primarycolor};
        &:focus {
            outline: none;
        }
    }
  
  input.message[type='text'] {
    padding-top: 70px;
  }
`
export const FormButton = styled.div`
  display: flex;
  width: 150px;
  height: 58px;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    font-family: ${fonttheme.font1};
    color: ${colors.secondarycolor};

    &::after {
    content: 'Our Works';
    }

    &:hover::after {
      content: 'Know More';
    }
  }
`
