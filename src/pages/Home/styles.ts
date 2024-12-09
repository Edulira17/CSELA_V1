import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SliderContainer = styled.div`
  width: 100%;
`;

// Conteudo
export const HomeContent = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  color: #b22222;

  padding: 1rem;
`;

export const CardImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); 
  gap: 1rem; 
  width: 70%;
  justify-items: center; 

  margin-top: 2rem;

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

  width: 282px;
  height: 362px;
  
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  border-radius: 8px;
  background-color: white;
`;

export const DescriptionImage = styled.figcaption`
  font-size: 0.7rem;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  
  max-width: 100%;
  gap: .5rem;
`;

export const TitleImage = styled.h4`
  font-weight: 900;
  color: #000;
`;

export const SubtitleImage = styled.p`
  color: gray;
`;
