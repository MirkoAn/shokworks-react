import React from 'react'

import { FeaturesCard } from '../FeaturesCard'
import { ArrowContainer, Container } from './styles'

import LeftArrow from '../../assets/images/arrow-left.svg'
import RightArrow from '../../assets/images/arrow-right.svg'

export const Carousel = () => {
  return (
    <Container>
      <FeaturesCard />
      <ArrowContainer>
        <img src={LeftArrow} alt='' />
        <img src={RightArrow} alt='' />
      </ArrowContainer>
    </Container>
  )
}
