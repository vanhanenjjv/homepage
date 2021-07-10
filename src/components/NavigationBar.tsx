import tw, { TwComponent } from 'twin.macro'

interface NavigationBarInnerComponents { 
  Item: typeof NavigationBarItem
}
  
type PartialNavigationBarComponent = 
  & TwComponent<"nav">
  & Partial<NavigationBarInnerComponents>

type NavigationBarComponent = 
  & TwComponent<"nav">
  & NavigationBarInnerComponents


const NavigationBar: PartialNavigationBarComponent = tw.nav`
  py-6
  flex
  flex-row
  border
  shadow-md
  rounded-md
`

const NavigationBarItem = tw.a`
  px-4
`

NavigationBar.Item = NavigationBarItem

export default NavigationBar as NavigationBarComponent