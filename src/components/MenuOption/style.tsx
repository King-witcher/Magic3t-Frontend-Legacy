import styled, { css } from 'styled-components'

interface ContainerProps {
  disabled?: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 25rem;
  flex: 0 0 auto;
  height: 37.5rem;
  background: #e9e9e9;
  border: solid 1px #bbb;
  transition: 100ms ease-in-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ disabled }) =>
    disabled
      ? css`
          filter: brightness(0.8) blur(10px);
        `
      : css`
          :hover {
            cursor: pointer;
            background: white;
            img {
              filter: brightness(1.1);
            }
          }
        `}

  .background {
    position: relative;
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0;
    }
  }

  .footer {
    flex: 0 0 4.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid 1px #bbb;
    box-sizing: border-box;
    color: #444;
    font-size: 15px;
    font-family: sans-serif;
  }
`
