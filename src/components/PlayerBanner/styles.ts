import styled from 'styled-components'

interface ContainerProps {
  borderColor: string
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  left: 2rem;
  display: flex;
  border: solid 3px ${({ borderColor }) => borderColor};
  background-color: #fff;
  box-sizing: border-box;
  background-color: #fff;
  transition: border-color 700ms linear;
  box-shadow: 0 0 1rem 0.5rem #00000020;
  border-radius: 8px;

  .player-data {
    padding: 1.1rem 1.4rem;
    width: 14rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    .nickname {
      font-size: 1.5rem;
    }
  }

  .timer {
    padding: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    width: 7rem;
  }
`
