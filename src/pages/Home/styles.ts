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
`;

export const SliderContainer = styled.div`
  width: 100%;
`;

export const HomeContent = styled.main`
  width: 1140px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

export const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  color: #B22222;

  padding: 1rem;
`

export const CardImageContainer = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;

  padding: 1rem;

  img {
    width: 250px;
    height: 250px; 
    object-fit: cover;
    border-radius: 8px; 
  }
`;

export const CardImage = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  padding: 2rem;

  border-radius: 16px;

  figcaption {
    font-size: 0.7rem;
    font-style: italic;
    margin-top: 1rem;
  }
`;
