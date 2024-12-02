import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useShoppingCart } from 'use-shopping-cart';
import { LignieCommende, PasserCommende } from "../Services/ServiceApi";


function Cart() {
    const ImgUrl = "http://127.0.0.1:8000/img/"
    const { cartDetails, clearCart, removeItem, cartCount, incrementItem, decrementItem } = useShoppingCart();

    const [user, setUser] = useState('')
    const navigate = useNavigate();

    const calculateTotalPrice = () => {
        let total = 0;
        for (const key in cartDetails) {
            const item = cartDetails[key];
            total += (item.prix || 0) * (item.quantity || 0);
        }
        return total;
    };


    const loadFromStorage = async () => {
        let _userLoc = localStorage.getItem("User");
        let customer = (_userLoc === null) ? undefined : JSON.parse(_userLoc);
        console.log(customer.user)
        if (customer !== undefined) {
            setUser(customer.user.id);
            console.log(user)
        } else {
            setUser('');
        }
    }

    const PasserCommande = async () => {
        try {
            loadFromStorage()
            if (user == '') {
                navigate('/Login');
                return alert("Please login to pass the commande")
            }
            else {
                let res = await PasserCommende(user.id)
                console.log(res)
                if (res.data) {
                    Object.values(cartDetails).forEach(element => {
                        let param = {
                            id_commende: res.data,
                            id_article: element.id,
                            quantite: element.quantity,
                            prixU: element.prix
                        }
                        LignieCommende(param)
                    });
                    clearCart()
                    alert("Commande passed successfully")
                    Navigate('/');

                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadFromStorage()
    }, [user])
    return (
        <div>
            {cartCount === 0 ? (
                <section className="about_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <br />
                                <div className="heading_text" style={{ textAlign: "center" }}>
                                    Your cart is empty. Please add some items to continue.
                                    <Link to="/Shop">
                                        Click ME
                                    </Link>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="untree_co-section before-footer-section">
                    <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartDetails && Object.values(cartDetails).map((cartItem) => {
                                                return <tr key={cartItem.id}>
                                                    <td className="product-thumbnail">
                                                        <img src={`${ImgUrl}${cartItem.logo}`} alt="Image" className="img-fluid" />
                                                    </td>
                                                    <td className="product-name">
                                                        <h2 className="h5 text-black">{cartItem.nom}</h2>
                                                    </td>
                                                    <td>{cartItem.prix}DT</td>
                                                    <td>
                                                        <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: "120px" }}>
                                                            <div className="input-group-prepend">
                                                                <button onClick={() => decrementItem(cartItem.id)} className="btn btn-outline-black decrease" type="button">-</button>
                                                            </div>
                                                            <input type="text" className="form-control text-center quantity-amount" value={cartItem.quantity}
                                                                placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                            <div className="input-group-append">
                                                                <button onClick={() => incrementItem(cartItem.id)} className="btn btn-outline-black increase" type="button">+</button>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>{parseFloat(cartItem.quantity) * parseFloat(cartItem.prix)} DT</td>
                                                    <td><a onClick={() => removeItem(cartItem.id)} className="btn btn-black btn-sm">X</a></td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>

                        <div className="row">

                            <div className="col-md-6 pl-5">
                                <div className="row justify-content-end">
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-12 text-right border-bottom mb-5">
                                                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-md-6">
                                                <span className="text-black">Total</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">{calculateTotalPrice()} DT</strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <button className="btn btn-black btn-lg py-3 btn-block" onClick={(e) => PasserCommande(e)}  >Proceed To Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </div >
    )
}

export default Cart
