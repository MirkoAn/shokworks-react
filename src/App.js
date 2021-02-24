import React from 'react'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { Support } from './Components/Support'
import { Work } from './Components/Work'

import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Hero />
    <Work />
    <Support />
  </>
)
