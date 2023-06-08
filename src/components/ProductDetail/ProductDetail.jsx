import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const ProductDetail = ({ data }) => {
  console.log(data);
  return (
    <div className="product-detail">
      <div className="product-detail__left-side">
        <div className="product-detail__card">
          <img src={data.imgPathDetail} alt={data.title} />
          <p>{data.title}</p>
        </div>
        <div className="product-detail__description">
          <h1>Descrição</h1>
          <p>{data.title}</p>
        </div>
      </div>

// Lado 
      <div className="product-detail__right-side">
        <h1>Informações Sobre o Produto</h1>
        <h2>{data.price}</h2>
        <p>
          Cor:{" "}
          {data.colors.length === 1
            ? data.colors.map((color, index) => (
                <span key={index}>{color}</span>
              ))
            : data.colors.map((color, index) =>
                index + 1 === data.colors.length ? (
                  <span key={index}>{color}</span>
                ) : (
                  <span key={index}>{color}, </span>
                )
              )}
        </p>
        <div className="product-detail__cube-colors">
          {data.colors.map((color) => (
            <div
              style={{
                width: "64px",
                height: "60px",
                borderRadius: "10px",
                backgroundColor: color,
              }}
            ></div>
          ))}
        </div>
        <p>Tamanho:</p>
        <div className="product-detail__sizes">
          {data.sizes.map((size) => (
            <span
              style={{
                width: "55px",
                height: "58px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "20px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {size}
            </span>
          ))}
        </div>
        <button>
          <Link to={`/pay/${data.id}`}>Finalizar Compra</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;