import tw, { TwComponent } from 'twin.macro'

interface CardInnerComponents { 
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter 
}

type PartialCardComponent = 
  & TwComponent<"div">
  & Partial<CardInnerComponents>

type CardComponent = 
  & TwComponent<"div">
  & CardInnerComponents

const CardHeader = tw.div`
  
`

const CardBody = tw.div`

`

const CardFooter = tw.div`

`

const Card: PartialCardComponent = tw.div`
  shadow-md
  rounded-md
  p-3
  grid
  grid-flow-row
  border
  gap-4
`

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card as CardComponent
