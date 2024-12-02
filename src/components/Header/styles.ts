import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;

  display: flex;
  flex-direction: column;
`
export const HeaderTitle = styled.div`
  background-color: red;
  height: 25vh;

  display: flex;
  align-items: center;
  padding: 0;

  color: #fff;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;


  height: 20vh;


`

export const HeaderLink = styled(Link)`
  
`



