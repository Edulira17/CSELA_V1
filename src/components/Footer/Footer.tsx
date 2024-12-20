import {
  FooterContainer,
  AddressContainer,
  LogoFooter,
  LinkAddress,
  AboutUsContainer,
  TalkUsContainer,
  IconContainer,
} from "./styles";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import LogoCsela from "../../assets/LOGO CSELA.png";

function Footer() {
  return (
    <FooterContainer>
      <AddressContainer>
        <LogoFooter src={LogoCsela} />
        <h4>Endereço:</h4>
        <LinkAddress
          href="https://maps.app.goo.gl/bbBYJsCbrT4mMrpu8"
          target="_blank"
        >
          R. Padre Mario, 21 - Colônia Antônio Aleixo, Manaus - AM, 69008-120
        </LinkAddress>
      </AddressContainer>
      <AboutUsContainer>
        <h3>Sobre nós</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse
          labore aperiam minima quo rem. Nam quas, consequatur non ex eaque
          ipsam iure, voluptates numquam harum eligendi tenetur modi natus!
        </p>
      </AboutUsContainer>
      <TalkUsContainer>
        <h3>Fale Conosco:</h3>
        <IconContainer>
          <a href="#">
            <FaInstagram className="icon" />
          </a>
          <a href="#">
            <FaFacebook className="icon" />
          </a>
          <a href="#">
            <MdEmail className="icon" />
          </a>
        </IconContainer>
      </TalkUsContainer>
    </FooterContainer>
  );
}

export default Footer;
