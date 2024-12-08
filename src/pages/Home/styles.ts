import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .container-slider {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 100%;
    margin-top: 1em;
    border: 1px solid red;
  }
`

export const SliderContainer = styled.div`
  width: 100%;
`

export const HomeContent = styled.main`
  width: 1140px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 1rem;
  
`

export const CardImageContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;


  img {
    width: 150px;
  }
`