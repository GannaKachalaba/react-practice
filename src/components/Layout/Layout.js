import { Conteiner } from "./Layout.styled";

export const Layout = ({ children }) => {
  return (
    <Conteiner>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </Conteiner>
  );
};
