import { useEffect, useState } from "react";
import axios from "axios";
import { watchlist } from "../data/data";

export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8080/userOrders", {
          withCredentials: true,
        });

        setAllOrders(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Avg Buy</th>
              <th>LTP</th>
              <th>Cur. val</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((stock, index) => {
              const ltp =
                watchlist?.find((x) => x.name === stock.name)?.price || 0;

              const curValue = ltp * stock.qty;

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{ltp.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
