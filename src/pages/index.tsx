import Header from '../components/Header'
import MenuOption from '../components/MenuOption'
import { Body, MainContainer } from './style'

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <Body>
        <MenuOption
          title="Partida rápida"
          background="images/menu/galois.jpg"
          onClick={() => {
            alert(1)
          }}
        />
        <MenuOption
          disabled
          title="Partida ranqueada"
          background="images/menu/elo.jpg"
          onClick={() => {
            alert(1)
          }}
        />
        <MenuOption
          disabled
          title="Personalizada"
          background="images/menu/schonfinkel.jpg"
          onClick={() => {
            alert(1)
          }}
        />
      </Body>
    </MainContainer>
  )
}

export default Home
