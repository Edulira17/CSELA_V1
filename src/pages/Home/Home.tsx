import Slider from "../../components/Slider/Slider";
import {
  CardImageContainer,
  HomeContainer,
  HomeContent,
  SliderContainer,
  CardImage,
  StyledTitle
} from "./styles";

// images
import imageCard1 from "./assets/dia_internacional_grafite.png";
import imageCard2 from "./assets/cantata_de_natal.jpg"
import imageCard3 from "./assets/espaco_cidadao.jpg"
import imageCard4 from "./assets/moradia_cidadania.jpg"
import imageCard5 from "./assets/mostra_cultural.jpg"

const Home = () => {
  return (
    <HomeContainer>
      <SliderContainer>
        <Slider />
      </SliderContainer>
      <HomeContent>
        <StyledTitle>Introdução ao CSELA</StyledTitle>
        <CardImageContainer>
          <CardImage>
            <img src={imageCard1} alt="" />
            <figcaption>Dia Internacional do Grafite</figcaption>
          </CardImage>
          <CardImage>
            <img src={imageCard2} alt="" />
            <figcaption>Cantata de Natal</figcaption>
          </CardImage>
          <CardImage>
            <img src={imageCard3} alt="" />
            <figcaption>Espaço
            Cidadão de Artes e Educação</figcaption>
          </CardImage>
          <CardImage>
            <img src={imageCard4} alt="" />
            <figcaption> FENAE, MORADIA E CIDADANIA e APCEF-AM</figcaption>
          </CardImage>
          <CardImage>
            <img src={imageCard5} alt="" />
            <figcaption>Mostra cultural do Ecae</figcaption>
          </CardImage>
        </CardImageContainer>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
