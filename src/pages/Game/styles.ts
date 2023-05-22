import styled from 'styled-components'

export const Card = styled.div`
  width: 6.25rem;
  height: 10.1125rem;
  background-color: #fff;
  box-sizing: border-box;
  border: solid 3px #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  color: #333;
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
