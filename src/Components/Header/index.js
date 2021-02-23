import React, { useState } from 'react'

import Logo from '../../assets/images/shokworks-logo.svg'

import {
  HeaderWrapper,
  MobileMenu,
  Image,
  MenuToggle,
  Nav,
  List,
  Search,
  Button,
  LaptopMenu,
  Dot,
  Hover
} from './styles'

import { MdSearch } from 'react-icons/md'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <>
      <HeaderWrapper id='header'>
        <MobileMenu>
          <Image src={Logo} alt='shokworks-logo' />
          <MenuToggle onClick={toggleMenu} open={open}>
            <svg height='24' viewBox='0 -53 384 384' width='24' xmlns='http://www.w3.org/2000/svg'><path d='m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' /><path d='m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' /><path d='m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' /></svg>
          </MenuToggle>
        </MobileMenu>
        <LaptopMenu>
          <Image src={Logo} alt='shokworks-logo' />
          <Nav open={open}>
            <List open={open}>
              <li>
                <a href='#'>
                  home
                </a>
                <Hover>
                  <Dot />
                </Hover>
              </li>
              <li>
                <a
                  href='#'
                >
                  about
                </a>
                <Hover>
                  <Dot />
                </Hover>
              </li>
              <li>
                <a
                  href='#'
                >
                  portfolio
                </a>
                <Hover>
                  <Dot />
                </Hover>
              </li>
              <li>
                <a
                  href='#'
                >
                  product
                </a>
                <Hover>
                  <Dot />
                </Hover>
              </li>
              <li>
                <a
                  href='#'
                >
                  career
                </a>
                <Hover>
                  <Dot />
                </Hover>
              </li>
              <li>
                <a
                  href='#'
                >
                  blog
                </a>
                <Hover>
                  <Dot />
                </Hover>
              </li>
              <div>
                <Search>
                  <input type='search' placeholder='Search Here' name='search' />
                  <MdSearch size='24px' className='SearchIcon' />
                </Search>
              </div>
              <Button>
                <a href='#'>Contact us</a>
              </Button>
            </List>
          </Nav>
        </LaptopMenu>
      </HeaderWrapper>
    </>
  )
}
