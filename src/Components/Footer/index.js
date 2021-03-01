import React from 'react'

import { FooterWrapper, Img, List, Container, Text, IconsContainer, Row } from './styles'

import Logo from '../../assets/images/shokworks-logo.svg'
import FbIcon from '../../assets/images/Group2790.png'
import SkypeIcon from '../../assets/images/Group2789.png'
import LinkedInIcon from '../../assets/images/Group2791.png'
import InstagramIcon from '../../assets/images/Group2792.png'

import { MdPhone, MdLocationOn, MdEmail } from 'react-icons/md'

export const Footer = () => {
  const pinkcolor = {
    color: '#9D60EB'
  }
  return (
    <FooterWrapper>
      <Img src={Logo} alt='ShokWorks-logo' />
      <Row>
        <Container>
          <h3>Contact Us</h3>
          <List>
            <li><a href='#' /><MdPhone style={pinkcolor} /> +(1) 824-5428</li>
            <li><a href='#' /><MdLocationOn style={pinkcolor} /> Miami, United States</li>
            <li><a href='#' /><MdEmail style={pinkcolor} /> yfuentes@shokworks.io</li>
          </List>
        </Container>
        <Container>
          <h3>Our Company</h3>
          <List>
            <li><a href='#' />About</li>
            <li><a href='#' />Product</li>
            <li><a href='#' />Portfolio</li>
            <li><a href='#' />Career</li>
            <li><a href='#' />Blog</li>
          </List>
        </Container>
        <Container>
          <h3>Social Contacts</h3>
          <List>
            <li><a href='#' />Facebook</li>
            <li><a href='#' />LinkedIn</li>
            <li><a href='#' />Youtube</li>
            <li><a href='#' />Vimeo</li>
            <li><a href='#' />Skype</li>
          </List>
        </Container>
        <Container>
          <h3>Address</h3>
          <Text>Internet Systems Consortium, Inc. 950 Charter Street Redwood City, CA USA.</Text>
          <h3>Follow Us</h3>
          <IconsContainer>
            <a href='#'><img src={FbIcon} alt='Facebook' /></a>
            <a href='#'><img src={SkypeIcon} alt='Skype' /></a>
            <a href='#'><img src={LinkedInIcon} alt='LinkedIn' /></a>
            <a href='#'><img src={InstagramIcon} alt='Instagram' /></a>
          </IconsContainer>
        </Container>
      </Row>
    </FooterWrapper>
  )
}
