import React from "react";

type Props = StoreProps & {};

const StoreItem: React.FC<Props> = ({ store }) => {
  return (
    <div>
      <h2>{store.id}</h2>
      <p>{store.id_seller}</p>
      <p>{store.id_client}</p>
      <p>{store.id_city}</p>
    </div>
  );
};

export default StoreItem