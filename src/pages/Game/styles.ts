import styled from 'styled-components'

export const Card = styled.div`
  width: 6.25rem;
  height: 10.1125rem;
  background-color: #fff;
  color: 333;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 0 6px 3px #00000020;
  transition: all 100ms linear;
  overflow: hidden;
  border-bottom: solid 5px transparent;
  border-top: solid 5px transparent;

  &.disappear {
    animation: 'disappear' 300ms linear;
    animation-fill-mode: both;
  }

  &.winner-triple {
    border: solid 5px #34ff89;
  }

  &.clickable {
    border-bottom-color: #34ff89;
    background-color: #fff;
    color: #000;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
    }
  }

  @keyframes disappear {
    to {
      opacity: 0;
      pointer-events: none;
      transform: scale(0.9);
    }
  }
`

export const CardDeck = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
`

export const PlayerId = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
`

export const PlayerBanner = styled.div`
  position: absolute;
  left: 2rem;
  display: flex;
  border: solid 3px #aaa;
  background-color: #fff;
  box-sizing: border-box;
  background-color: #aaa;
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

export const Button = styled.div`
  position: absolute;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 6.25rem;
  padding: 1.5rem 4rem;
  width: 15rem;
  border-radius: 8px;
  font-size: 2rem;
  box-shadow: 0 0 6px 3px #00000020;
  transition: all 100ms linear;

  :hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px 4px #00000020;
  }
`
