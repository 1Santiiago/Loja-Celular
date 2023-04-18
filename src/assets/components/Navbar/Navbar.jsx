import React from "react";
import { Link } from "react-router-dom";
import Store from "../../../routes/Store";
import Car from "../../../routes/Car";
import * as c from "./style";
function Navbar() {
  const menu = ["Modelos", "Carrinho", "Minha conta"];

  return (
    <c.Navbar>
      <>
        <c.Logo>Loja de Celular</c.Logo>
        <c.Links>
          <c.Li>
            <c.NavLink to="/">Modelos</c.NavLink>
          </c.Li>
          <c.Li>
            <c.NavLink to="/car">Carrinho</c.NavLink>
          </c.Li>
          <c.Li>
            <c.NavLink to="/Profile">Minha conta</c.NavLink>
          </c.Li>
        </c.Links>
      </>
    </c.Navbar>
  );
}

export default Navbar;
