import Slider from "../../components/Slider/Slider";
import {
  CardImageContainer,
  HomeContainer,
  HomeContent,
  SliderContainer,
  CardImage,
  StyledTitle,
  TitleImage,
  SubtitleImage,
  DescriptionImage,
} from "./styles";

// images
import imageCard1 from "./assets/dia_internacional_grafite.png";
import imageCard2 from "./assets/oficina_violao.jpg";
import imageCard3 from "./assets/espaco_cidadao.jpg";
import imageCard4 from "./assets/moradia_cidadania.jpg";
import imageCard5 from "./assets/mostra_cultural.jpg";

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
            <DescriptionImage>
              <TitleImage>Dia Internacional do Grafite</TitleImage>
              <SubtitleImage>
                Dia Internacional do Graffiti, 27 de março
              </SubtitleImage>
            </DescriptionImage>
          </CardImage>
          <CardImage>
            <img src={imageCard2} alt="" />
            <DescriptionImage>
              <TitleImage>Oficina de Violão</TitleImage>
              <SubtitleImage>
                Oficina de Violão realizada no dia 11 de março
              </SubtitleImage>
            </DescriptionImage>
          </CardImage>
          <CardImage>
            <img src={imageCard3} alt="" />
            <DescriptionImage>
              <TitleImage>Espaço Cidadão de Artes e Educação</TitleImage>
              <SubtitleImage>
                Servindo nossa comunidade, contribuindo com a educação de nossas
                crianças
              </SubtitleImage>
            </DescriptionImage>
          </CardImage>
          <CardImage>
            <img src={imageCard4} alt="" />
            <DescriptionImage>
              <TitleImage>FENAE, MORADIA E CIDADANIA e APCEF-AM</TitleImage>
              <SubtitleImage>
                CSELA/ECAE, teve a honra em receber os nossos parceiros da
                FENAE, MORADIA E CIDADANIA e APCEF-AM.
              </SubtitleImage>
            </DescriptionImage>
          </CardImage>
          <CardImage>
            <img src={imageCard5} alt="" />
            <DescriptionImage>
              <TitleImage>Mostra Cultural</TitleImage>
              <SubtitleImage>
                Mostra cultural do Ecae com o tema: Catástrofe climáticas
              </SubtitleImage>
            </DescriptionImage>
          </CardImage>
        </CardImageContainer>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
