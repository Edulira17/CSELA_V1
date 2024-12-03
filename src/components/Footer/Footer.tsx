import { FooterContainer, AddressContainer, LogoFooter } from "./styles"

import LogoCsela from '../../assets/LOGO CSELA.png'

function Footer() {
  return (
    <FooterContainer>
      <AddressContainer>
        <LogoFooter src={LogoCsela}/>
      </AddressContainer>
    </FooterContainer>
  )
}

export default Footer