import { HeaderContainer, HeaderNav, HeaderLink, HeaderTitle } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <h1>CSELA</h1>
      </HeaderTitle>
      <HeaderNav>
        <HeaderLink to="/">Início</HeaderLink>
        <HeaderLink to="history">História</HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
