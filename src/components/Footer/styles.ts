import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  background-color: #b22222;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const AddressContainer = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  padding: 1rem 1.5rem;
`;

export const LogoFooter = styled.img`
  width: 9vw;
  height: auto;
`;

export const LinkAddress = styled.a`
  text-align: center;
  font-size: 0.9rem;

  text-decoration: none;
  color: #fff;
`;

export const AboutUsContainer = styled.div`
  width: 40%;
  padding: 1rem;
  
  display: flex;
  flex-direction: column;
  gap: 10px;
  

  p{
    font-size: .9rem;
  }
  
`
