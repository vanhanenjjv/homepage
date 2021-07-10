import React from 'react'

import tw from 'twin.macro'
import Card from '../components/Card'

import Layout from '../components/Layout'

const Button = tw.button`
  bg-blue-500
  hover:bg-blue-800 
  text-white 
  p-2 
  rounded
`

export default function () {
  return (
    <Layout>
      <Card>
        <Card.Header>
          <p>yeet</p>
        </Card.Header>
        <Card.Body>
          <p>Hello, world!</p>

        </Card.Body>
        <Card.Footer>
          <Button>Nappi</Button>
        </Card.Footer>
      </Card>
    </Layout>
  )
}
