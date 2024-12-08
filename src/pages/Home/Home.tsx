import Slider from "../../components/Slider/Slider";
import { CardImageContainer, HomeContainer, HomeContent, SliderContainer } from "./styles";

// images
import imageCard1 from './assets/dia_internacional_grafite.png'

const Home = () => {
  return (
    <HomeContainer>
      <SliderContainer >
        <Slider />
      </SliderContainer>
      <HomeContent>
        <h1>Introdução ao CSELA</h1>
        <CardImageContainer>
          <figure>
            <img src={imageCard1} alt="" />
            <figcaption>descrição da imagem</figcaption>
          </figure>
          <figure>
            <img src={imageCard1} alt="" />
            <figcaption>descrição da imagem</figcaption>
          </figure>
          <figure>
            <img src={imageCard1} alt="" />
            <figcaption>descrição da imagem</figcaption>
          </figure>
          <figure>
            <img src={imageCard1} alt="" />
            <figcaption>descrição da imagem</figcaption>
          </figure>
          <figure>
            <img src={imageCard1} alt="" />
            <figcaption>descrição da imagem</figcaption>
          </figure>
          <figure>
            <img src={imageCard1} alt="" />
            <figcaption>descrição da imagem</figcaption>
          </figure>
        </CardImageContainer>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
