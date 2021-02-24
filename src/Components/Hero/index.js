import React from 'react'

import HeroImage from '../../assets/images/community1.png'

import { HeroWrapper, Image, Container, BlueButton, WhiteButton, ButtonsContainer } from './styles'

export const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <Image src={HeroImage} alt='community-img' />
        <Container>
          <h1>
            a brand new way <br /> to see the world
          </h1>
        </Container>
        <ButtonsContainer>
          <BlueButton>
            <a href='#'>Our Works</a>
          </BlueButton>
          <WhiteButton>
            <a href='#'>Know More</a>
          </WhiteButton>
        </ButtonsContainer>
      </HeroWrapper>
    </>
  )
}
