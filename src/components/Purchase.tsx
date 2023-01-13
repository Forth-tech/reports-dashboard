import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPurchase, fetchPurchases } from "../store/purchase-actions";
import { IPurchase } from "../types/purchase.types";
import PurchaseItem from "./PurchaseItem";

const Purchase = () => {
  const [purchase_id, setPurchase_id] = useState(0);
  const dispatch = useAppDispatch();
  const allPurchases = useAppSelector((state) => state.purchase.purchases);
  const purchase = useAppSelector((state) => state.purchase.activePurchase);

  const clickHandler = () => {
    dispatch(fetchPurchases());
  };

  const searchHandler = () => {
    dispatch(fetchPurchase(purchase_id));
  };

  const checkPurchases = (): boolean => {
    if (allPurchases.length > 0) {
      return true;
    }
    return false;
  };

  const checkPurchase = (): boolean => {
    if (purchase) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div>
        <h1>Purchase</h1>
        <button onClick={clickHandler}>Get all purchases</button>
        <input
          type="number"
          onChange={(e) => setPurchase_id(+e.target.value)}
        />
        <button onClick={searchHandler}>Search purchase</button>
      </div>
      <div>
        <h1>Active Purchase</h1>
        {checkPurchase() && (
          <PurchaseItem key={purchase?.id} purchase={purchase as IPurchase} />
        )}
      </div>
      <div>
        <h1>All Purchases</h1>
        <div>
          {checkPurchases() &&
            allPurchases.map((purchase) => (
              <PurchaseItem key={purchase.id} purchase={purchase} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Purchase;