import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPurchase, fetchPurchases } from "../store/purchase-actions";
import { IPurchase } from "../types/purchase.types";
import PurchaseItem from "./PurchaseItem";

type Props = {};

const Purchase: React.FC<Props> = () => {
  const [purchase_id, setPurchase_id] = useState(0);
  const dispatch = useAppDispatch();
  const allPurchases = useAppSelector((state) => state.purchase.purchases);
  const purchase = useAppSelector((state) => state.purchase.activePurchase);
  const acccessToken = useAppSelector((state) => state.user.user?.access_token);

  useEffect(() => {
    if (acccessToken && !checkPurchases()) {
      dispatch(fetchPurchases(acccessToken));
    }
  })

  const clickHandler = () => {
    dispatch(fetchPurchases(acccessToken as string));
  };

  const searchHandler = () => {
    dispatch(fetchPurchase(purchase_id, acccessToken as string));
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
        {checkPurchases() && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Seller</th>
                <th>Store</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {allPurchases.map((purchase) => (
                <tr key={purchase.id}>
                  <td>{purchase.id}</td>
                  <td>{purchase.id_seller}</td>
                  <td>{purchase.id_store}</td>
                  <td>{purchase.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default Purchase;
