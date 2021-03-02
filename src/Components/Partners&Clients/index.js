import React from 'react'
import { ClientsCard } from '../ClientsCard'

import { Container, Column } from './styles'

export const Partners = () => {
  return (
    <Container>
      <div>
        <h2>our partners &amp; clients</h2>
      </div>
      <Column>
        <ClientsCard />
      </Column>
    </Container>
  )
}
