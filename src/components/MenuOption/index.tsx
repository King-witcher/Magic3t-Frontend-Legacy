import { Container } from './style'

interface MenuOptionProps {
  title?: string
  background?: string
  onClick?: () => void
  disabled?: boolean
  searching?: boolean
}

const MenuOption = ({
  title,
  background,
  disabled,
  onClick,
  searching,
}: MenuOptionProps) => {
  return (
    <Container
      disabled={disabled}
      onClick={onClick}
      style={searching ? { filter: 'brightness(0.6)' } : {}}
    >
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
