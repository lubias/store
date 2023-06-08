import "./index.scss";
import Header from "../../components/Header/Header";
import "./index.scss";
import { Link, useParams } from "react-router-dom";

const Pay = ({data}) => {
  const { payId } = useParams();
  const selectProduct = data.find((product) => product.id == payId);

  return (
    <section className="pay">
      <Header />
      <div className="pay-detail">
        <div className="pay-detail__left-side">
          <form className="pay-detail__form">
            <div className="pay-detail__input-wrapper">
              <label htmlFor="name">Nome: </label>
              <input
                type="text"
                placeholder="Nome completo"
                id="name"
                className="pay-detail__input-name"
              />
              <label htmlFor="name">Entrega: </label>
              <input
                type="text"
                placeholder="Endereço de entrega"
                id="entrega"
              />
            </div>
            <div className="pay-detail__format">
              <h2>Forma de Pagamento:</h2>
              <div className="pay-detail__pix">
                <input type="checkbox" name="format" id="pix" />
                <label htmlFor="pix">Pix</label>
              </div>
              <div className="pay-detail__boleto">
                <input type="checkbox" name="format" id="boleto" />
                <label htmlFor="boleto">Boleto</label>
              </div>
              <div className="pay-detail__credit-card">
                <input type="checkbox" name="format" id="credit-card" />
                <label htmlFor="credit-card">Cartão de Crédito</label>
              </div>
            </div>
            
            <Link to={"/home"}>
              <button type="submit">Enviar Pedido</button>
            </Link>
          </form>
        </div>
        <div className="pay-detail__right-side">
          <h1>Resumo do Pedido:</h1>
          <div className="pay-detail__product-price">
            <div className="pay-detail__description">Produtos (1):</div>
            <h1>{selectProduct.price}</h1>
          </div>
          <div className="pay-detail__product-total">
            <div className="pay-detail__description">Total:</div>
            <h1>{selectProduct.price}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pay;
