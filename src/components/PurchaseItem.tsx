import React from "react";

type Props = PurchaseProps & {};

const PurchaseItem: React.FC<Props> = ({ purchase }) => {
  return (
    <div>
      <h2>{purchase.nf}</h2>
      <p>{purchase.id_seller}</p>
      <p>{purchase.id_store}</p>
    </div>
  );
};

export default PurchaseItem