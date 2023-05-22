import styled, { css } from 'styled-components'

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
  background-color: ${({ borderColor }) => borderColor};
  transition: all 1000ms linear;
  gap: 3px;

  .player-data {
    padding: 1.1rem 1.4rem;
    width: 14rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    background-color: white;
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
    background-color: white;
  }
`
