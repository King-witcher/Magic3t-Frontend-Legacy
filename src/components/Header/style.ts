import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 3.75rem;
  background: #fff;
  display: block;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 1.875rem;
  box-shadow: 0 0 10px 5px #00000010;

  span.logo {
    color: #036;
    font-size: 1.4375rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  span.silver {
    color: #999;
    font-weight: 600;
  }

  span.diamond {
    color: #0099ff;
    font-weight: 600;
  }
`
