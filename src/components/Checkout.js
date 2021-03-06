import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h3>{user? "Hello " + user?.email: ""}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    { basket.map( (item) =>{
                        return <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            title={item.title}/>
                    })}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;