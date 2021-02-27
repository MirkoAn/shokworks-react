import React from 'react'

import { Card, AvatarImg, ArrowContainer } from './styles'

import RubiyaAvatar from '../../assets/images/Ellipse344.png'
import LeftArrow from '../../assets/images/arrow-left.svg'
import RightArrow from '../../assets/images/arrow-right.svg'

export const Testimonials = () => {
  return (
    <Card>
      <div>
        <AvatarImg src={RubiyaAvatar} alt='' />
      </div>
      <p>Shokworks are dedicated and they accomplished all my ideas and thoughts for my project, excellent guidance.</p>
      <h4>Rubiya Mond De-Patrica</h4>
      <span>CEO, Zexbay-fine</span>
      <ArrowContainer>
        <img src={LeftArrow} alt='' />
        <img src={RightArrow} alt='' />
      </ArrowContainer>
    </Card>
  )
}
