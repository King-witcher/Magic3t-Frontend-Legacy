import { Container } from './style'

interface MenuOptionProps {
  title?: string
  background?: string
  onClick?: () => void
}

const MenuOption = ({ title, background, onClick }: MenuOptionProps) => {
  return (
    <Container>
      <div className="background">
        {background && <img src={background} alt="Background" />}
      </div>
      <div className="footer">{title}</div>
    </Container>
  )
}

export default MenuOption
