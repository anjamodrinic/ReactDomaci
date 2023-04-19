import React from "react";
import jedneSkije from "./jedneSkije";

const skije = ({
    products,
    onAdd,
  }) => {
  return (
    <div className="okvir">
      {products.map((prod) => (
        <jedneSkije
          product={prod}
          key={prod.id}
          onAdd={onAdd}
          inCart={1}
        />
      ))}
    </div>
  );
};

export default skije;