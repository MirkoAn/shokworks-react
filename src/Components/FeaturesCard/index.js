import React from 'react'

import { Card } from './styles'

import CommunicationIcon from '../../assets/images/icon-2.png'

export const FeaturesCard = () => {
  return (
    <Card>
      <div>
        <img src={CommunicationIcon} alt='' />
      </div>
      <h2>Great <span>Communication</span></h2>
      <p>We maintain 24/7 communication to cover all your need for the project</p>
    </Card>
  )
}
