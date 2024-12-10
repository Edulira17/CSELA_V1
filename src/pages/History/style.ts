import styled from 'styled-components'

export const HistoryContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 2rem;

`

export const TitleHistory = styled.h1`
  font-size: 2rem;
  font-weight: 900;

  color: #b22222;
`

export const HistoryContent = styled.section`
  max-width: 70%;
  padding: 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  .text-history {
    font-size: 1.2rem;
  }
`

export const ImageLocal = styled.img`
  width: 450px;
  border-radius: 8px;
  border: 2px solid #fff;
`
