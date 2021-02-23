import React, { useState } from 'react'

import Logo from '../../assets/images/shokworks-logo.svg'

import { HeaderWrapper, MobileMenu, Image, MenuToggle, Nav, List, Search, Button } from './styles'

import { MdSearch } from 'react-icons/md'

export const Header = () => {
  const [open, setOpen] = useState(true)
  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <>
      <HeaderWrapper id='header'>
        <MobileMenu className='primary-navbar__logo'>
          <Image src={Logo} alt='shokworks-logo' />
          <MenuToggle onClick={toggleMenu} open={open}>
            <svg height='24' viewBox='0 -53 384 384' width='24' xmlns='http://www.w3.org/2000/svg'><path d='m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' /><path d='m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' /><path d='m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' /></svg>
          </MenuToggle>
        </MobileMenu>
        <Nav open={open}>
          <List open={open}>
            <li><a href='#'>home</a></li>
            <li><a href='#'>about</a></li>
            <li><a href='#'>portfolio</a></li>
            <li><a href='#'>product</a></li>
            <li><a href='#'>career</a></li>
            <li><a href='#'>blog</a></li>
            <div className='primary-navbar__search-container'>
              <Search className='search'>
                <input className='SearchBox' type='search' placeholder='Search Here' name='search' />
                <MdSearch size='24px' className='SearchIcon' />
              </Search>
            </div>
            <Button>
              <a href='#' className='btn'>Contact us</a>
            </Button>
          </List>
        </Nav>
        {/* <div className='site-header__search-container items'>
          <div className='search'>
            <input class='searchBox' type='search' placeholder='Search Here' name='search' />
          </div>
        </div>
        // <div class='site-header__btn-container items'>
        //   <a href='#' class='btn'>Contact us</a>
        // </div> */}
        {/* <List className='primary-navbar__items'>
            <li><a href='#'>home</a></li>
            <li><a href='#'>about</a></li>
            <li><a href='#'>portfolio</a></li>
            <li><a href='#'>product</a></li>
            <li><a href='#'>career</a></li>
            <li><a href='#'>blog</a></li>
          </List>
           */}
      </HeaderWrapper>
    </>
  )
}
