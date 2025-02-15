import React from 'react';

const CartBox: React.FC = () => {
    return (
        <div className="absolute p-4 rounded-md shadow-sm bg-gray-50 top-12 right-0 flex-col gap-6 z-20">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {/* Cart items will be displayed here */}
            </div>
            <div className="cart-summary">
                <p>Total: $0.00</p>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default CartBox;