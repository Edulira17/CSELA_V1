import { Outlet } from "react-router-dom";

import { LayoutContainer, LayoutMainContent } from "./styles";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutMainContent>
        <Outlet />
      </LayoutMainContent>
    </LayoutContainer>
  );
};

export default Layout;
