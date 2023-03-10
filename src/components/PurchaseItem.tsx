import React from "react";
import { IPurchase } from "../types/purchase.types";

type Props = {
  purchase: IPurchase;
};

const PurchaseItem: React.FC<Props> = ({ purchase }) => {
  return (
    <div>
      <h2>{purchase.nf}</h2>
      <p>{purchase.id_seller}</p>
      <p>{purchase.id_store}</p>
      <p>{purchase.id}</p>
    </div>
  );
};

export default PurchaseItem