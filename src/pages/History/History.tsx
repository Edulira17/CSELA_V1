import { HistoryContainer, HistoryContent, TitleHistory } from './style'

const History = () => {
  return (
    <HistoryContainer>
      <TitleHistory>
        História do Centro Social e Educacional do Lago do Aleixo
      </TitleHistory>
      <HistoryContent>
        <p className='text-history'>
          Uma das entidades que proporcionou melhoria na qualidade de vida dos
          moradores da Colônia Antonio Aleixo é o Centro Social e Educacional do
          Lago do Aleixo (CSELA), fundado em 24 de abril de 1972. Este centro
          desenvolve vários projetos de capacitação nas comunidades do bairro.
          Entre os projetos desenvolvidos pela instituição está o Ecae (Espaço
          Cidadão de Arte e Educação), com aulas para a comunidade de balé
          clássico, oficina de leitura e jogos, leitura pelo computador, escola
          de música, biblioteca, espaço teatral.
        </p> 

        <br />
        {/* INSERIR IMAGEM DO LOCAL DO CSELA */}
        {/*<img src="" alt="" />*/}
        <br />

        
        <p className='text-history'>
          De acordo com Isaque Dantas de Souza, coordenador do centro, um
          importante local desse projeto é a biblioteca, que evita o
          deslocamento dos estudantes até o Centro da cidade para realizar
          pesquisas escolares. Já o projeto Remo Vida Atividades Esportivas foi
          pensado e desenvolvido após um acidente envolvendo cinco crianças, que
          perderam a vida ao naufragarem quando tentavam atravessar o lago.
          Nenhuma dessas crianças sabia nadar e, desde então, o projeto ensina
          às crianças a prática de natação e também a de remo, além de manter
          uma escola de futebol e de capoeira.
        </p>
      </HistoryContent>
    </HistoryContainer>
  )
}

export default History
