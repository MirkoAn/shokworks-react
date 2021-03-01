import React from 'react'
import { Forms } from '../Forms'

import { Container } from './styles'

import Banner from '../../assets/images/banner-1.png'

export const FormContainer = () => {
  return (
    <Container>
      <h2>Facing Problem?<br /><span>Let's Get in Touch Now</span></h2>
      <Forms />
      <img src={Banner} alt='banner' />
    </Container>
  )
}
