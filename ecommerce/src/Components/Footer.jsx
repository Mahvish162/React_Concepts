import React from "react";
import "../Styles/global.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="foot1">
                    <h3>e-commerce</h3>
                </div>
                <div className="foot2">
                    <h3>Products</h3>
                    <ul>
                        <li>Electronics</li>
                        <li>Groceries</li>
                        <li>Home Appliances</li>
                    </ul>
                </div>
                <div className="foot3">
                    <ul>
                        <li>Address : Bangalore</li>
                        <li>Phone : 87643542</li>
                        <li>Mail : Banglaore.com</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer