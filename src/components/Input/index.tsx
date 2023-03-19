import { FunctionComponent, useEffect, useState } from 'react'
import { Container, InputBox, MiddleFieldLabel, TopFieldLabel } from './styles'

interface InputProps {
  value?: string
  onChange?: (value: string) => void
  label?: string
  password?: boolean
}
 
const Input: FunctionComponent<InputProps> = ({value, onChange, label, password}) => {

  const [typing, setTyping] = useState(false)
  const [inputValue, setInputValue] = useState(value || '')

  useEffect(() => {
    setInputValue(value || '')
    if (value?.length)
      setTyping(true)
  }, [value])

  function onFocus() {
    setTyping(true)
  }

  function onBlur() {
    if (!inputValue.length)
      setTyping(false)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChangeHandler(e: any) {
    setInputValue(e.target.value)
    if(onChange)
      onChange(e.target.value)
  }

  return ( 
    <Container>
      <InputBox type={password ? 'password' : 'text'} onFocus={onFocus} onBlur={onBlur} value={inputValue} onChange={onChangeHandler}/>
      <TopFieldLabel enabled={typing}>{ label }</TopFieldLabel>
      <MiddleFieldLabel enabled={!typing}>{ label }</MiddleFieldLabel>
    </Container>
  )
}
 
export default Input