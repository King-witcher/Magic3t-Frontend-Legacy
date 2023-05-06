import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 3.75rem;
  background: #f2f2f2;
  display: block;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 1.875rem;
  border-bottom: solid 1px #bbb;

  span.logo {
    color: #036;
    font-size: 1.4375rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  span.diamond {
    color: #0099FF;
    font-weight: 600;
  }
`