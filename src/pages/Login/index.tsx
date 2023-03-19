import { useState } from 'react'
import Input from '../../components/Input'
import { useSessionContext } from '../../contexts/AuthContext'
import { ErrorLabel, LoginContainer, Title } from './styles'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login, isLoading, error } = useSessionContext()

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value)
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault()
    login({ username, password })
  }

  return (<>
    <LoginContainer>
      <Title>
        Iniciar sessão
      </Title>
      <form action="" onSubmit={handleSubmit}>
        <Input label='Nome de usuário' value={username} onChange={handleUsernameChange} disabled={isLoading} />
        <Input label='Senha' value={password} onChange={handlePasswordChange} password disabled={isLoading} />
        <ErrorLabel>{error}</ErrorLabel>
        <input type="submit" value="Entrar"/>
      </form>
    </LoginContainer>
  </>
  )
}
 
export default LoginPage