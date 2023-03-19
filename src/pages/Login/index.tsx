import { useState } from 'react'
import Input from '../../components/Input'
import { LoginContainer, Title } from './styles'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsernameChange(username: string) {
    setUsername(username)
  }

  function handlePasswordChange(password: string) {
    setPassword(password)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault()
  }

  return (<>
    <LoginContainer>
      <Title>
        Fazer Login
      </Title>
      <form action="" onSubmit={handleSubmit}>
        <Input label='Nome de usuário' value={username} onChange={handleUsernameChange}/>
        <Input label='Senha' value={password} onChange={handlePasswordChange} password/>
        <input type="submit" value="Entrar"/>
      </form>
    </LoginContainer>
  </>
  )
}
 
export default LoginPage