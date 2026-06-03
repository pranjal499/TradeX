import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

export default function Orders() {

    // use navigation function:
    const navigate = useNavigate();

    // orders:
    const [allOrders, setAllOrders] = useState([]);

    // no order:
    const [isEmpty, setIsEmpty] = useState(false);

    // order id to sell:
    const [orderId, setOrderId] = useState();

    useEffect(() => {

        const fetchOrders = async () => {

            try {

                const res = await axios.get(
                    'http://localhost:3002/orders',
                    {
                        withCredentials: true
                    }
                );

                setAllOrders(res.data);
                // if (allOrders.length =! 0) setIsEmpty(true);
                console.log(res);

            }
            catch (err) {

                console.log(err);

                navigate('/');

            }
        };

        fetchOrders();

    }, []);

    // Hndle sell function:
    const handleSell = (id) => {
        setOrderId(id);

        axios.delete(`http://localhost:3002/orders/${id}`);
        window.location.reload();
    }

    return (
        <>

            {isEmpty ?
                (<div className="no-order">
                    <h3 className="title">Orders</h3>

                    <p>You have no order.</p>
                    <Link to='http://localhost:3001'>
                    <button className="btn order-btn">Get started</button>
                    </Link>
                </div>)
                :
                (<div>
                    <h3 className="title">Orders ({allOrders.length})</h3>

                    <div className="order-table">
                        <table>
                            <tr>
                                <th>Instrument</th>
                                <th>Qty.</th>
                                <th>Avg. cost</th>
                                <th>Mode</th>
                                <th>Sell</th>
                            </tr>

                            {allOrders.map((stock, index) => {
                                //   const curValue = stock.price * stock.qty;
                                //   const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                                //   const profClass = isProfit ? "profit" : "loss";
                                //   const dayClass = stock.isLoss ? "loss" : "profit";

                                return (
                                    <tr key={index}>
                                        <td>{stock.name}</td>
                                        <td>{stock.qty}</td>
                                        <td>{stock.price}</td>
                                        <td>{stock.mode}</td>
                                        <td>
                                            <button className="order-btn" onClick={() => handleSell(stock._id.toString())}>Sell</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </table>
                    </div>
                </div>
                )
            }
        </>
    )
}