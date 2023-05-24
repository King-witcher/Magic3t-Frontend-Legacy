import styled, { css } from 'styled-components'

interface ContainerProps {
  disabled?: boolean
}

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
`

export const Container = styled.div<ContainerProps>`
  position: relative;
  border-radius: 8px;
  width: 25rem;
  flex: 0 0 auto;
  height: 37.5rem;
  background: #e9e9e9;
  transition: 100ms ease-in-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 10px 5px #00000020;

  ${({ disabled }) =>
    disabled
      ? css`
          filter: brightness(0.8) blur(10px);
        `
      : css`
          :hover {
            cursor: pointer;
            transform: scale(1.02);
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

  .black-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000060;
  }

  .timespan {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    font-weight: 600;
    color: #fff;
  }

  .footer {
    flex: 0 0 4.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid 1px #bbb;
    box-sizing: border-box;
    color: #444;
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`

export const CancelButton = styled.div`
  cursor: pointer;
  height: 3.5rem;
  background-color: #d32;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  font-size: 1.3rem;
  color: #fee;
  border: solid 2px #a21;

  :hover {
    background-color: #f32;
    border: solid 2px #c21;
  }
`
