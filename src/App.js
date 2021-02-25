import React from 'react'
import { Footer } from './Components/Footer'
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
    <Footer />
  </>
)
