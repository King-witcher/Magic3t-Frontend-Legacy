import { Container } from './style'

interface MenuOptionProps {
  title?: string
  background?: string
  onClick?: () => void
  disabled?: boolean
}

const MenuOption = ({ title, background, disabled }: MenuOptionProps) => {
  return (
    <Container disabled={disabled}>
      <div className="background">
        {background && (
          <img src={background} alt="Background" draggable="false" />
        )}
      </div>
      <div className="footer">{title}</div>
    </Container>
  )
}

export default MenuOption
