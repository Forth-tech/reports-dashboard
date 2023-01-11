import React, { useEffect, useState } from "react";
import PurchaseItem from "./components/PurchaseItem";
import "./App.css";
import { getPurchases } from "./api/purchase.api";

const App: React.FC = () => {
  const [purchases, setPurchases] = useState<IPurchase[]>([]);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = (): void => {
    getPurchases()
      .then(({ data: { data } }: IPurchase[] | any) => setPurchases(data))
      .catch((err: Error) => console.log(err));
  };

  return (
    <main className="App">
      <h1>Minhas Compras</h1>
      {purchases.map((purchase: IPurchase) => (
        <PurchaseItem key={purchase.id} purchase={purchase} />
      ))}
    </main>
  );
};

export default App;
