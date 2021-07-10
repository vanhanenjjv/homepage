import React from 'react'

import tw from 'twin.macro'
import NavigationBar from './NavigationBar'

const Container = tw.div`
  mt-2
  container
  mx-auto
`

const Content = tw.main`
  mt-4
`

const Layout: React.FC = ({ children }) => (
  <Container>
    <NavigationBar>
      <NavigationBar.Item href="/">Home</NavigationBar.Item>
      <NavigationBar.Item href="/about">About</NavigationBar.Item>
    </NavigationBar>
    <Content>{children}</Content>
  </Container>
)

export default Layout
