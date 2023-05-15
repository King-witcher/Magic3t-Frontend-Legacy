import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const Body = styled.div`
  flex: 1 0;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
`

export const UnavailableLabel = styled.span`
  font-size: 1.3rem;
  color: #a00;
`