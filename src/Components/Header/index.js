import React from 'react'

import Logo from '../../assets/images/shokworks-logo.svg'

import { Headers, Nav, List, Search } from './styles'

import { MdSearch } from 'react-icons/md'

export const Header = () => {
  return (
    <>
      <Headers className='site-header'>
        <Nav className='primary-navbar'>
          <div className='primary-navbar__logo'>
            <img src={Logo} alt='shokworks-logo' />
          </div>
          <List className='primary-navbar__items'>
            <li><a href='#'>home</a></li>
            <li><a href='#'>about</a></li>
            <li><a href='#'>portfolio</a></li>
            <li><a href='#'>product</a></li>
            <li><a href='#'>career</a></li>
            <li><a href='#'>blog</a></li>
          </List>
          <div className='primary-navbar__search-container'>
            <Search className='search'>
              <input className='SearchBox' type='search' placeholder='Search Here' name='search' />
              <MdSearch size='24px' className='SearchIcon' />
            </Search>
          </div>
          <div className='primary-navbar__btn-container'>
            <a href='#' className='btn'>Contact us</a>
          </div>
        </Nav>
      </Headers>
    </>
  )
}
