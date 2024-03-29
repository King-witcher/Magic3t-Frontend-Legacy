import styled from 'styled-components'

export const PageContainer = styled.div`
  background-color: #ddd;
  background-image: radial-gradient(#d0d0d0 1px, transparent 0);
  background-size: 20px 20px;
  background-position: -19px -19px;
  overflow: hidden;
  position: relative;
  flex: 1;
`

export const UnavailableLabel = styled.span`
  font-size: 1.3rem;
  color: #a00;
`

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 5px transparent;
  border-top-color: #333;
  border-bottom-color: #333;
  animation: rotate1 ease 700ms infinite;

  @keyframes rotate1 {
    to {
      transform: rotate(360deg);
    }
  }
`
