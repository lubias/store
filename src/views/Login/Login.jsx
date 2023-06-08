import React from "react";
import "./index.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <Header />
      <form className="login__form">
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h2>você pode entrar com o seu CPF</h2>
        <div className="login_input-wrapper">
          <label htmlFor="name">Digite seu CPF</label>
          <input
            type="text"
            id="name"
            className="login__input-name"
            placeholder="Nome completo"
          />
        </div>
        <div className="login_input-wrapper">
          <label htmlFor="name">Digite seu CPF</label>
          <input
            type="password"
            id="password"
            className="login__input-password"
            placeholder="********"
          />
        </div>
          <Link to={"/home"}><button type="submit">Entrar</button></Link>
      </form>
    </section>
  );
};

export default Login;
