import React from 'react'
import { useCart } from '../../context/cart-context'
import { getTotalCartAmount } from '../../utils/getTotalProductPrice'

function PriceDetails() {
    const { cart } = useCart()
    console.log({ cart })
    const totalCartAmount = getTotalCartAmount(cart)
    const deliveryCharge = 49;
    return (
        <div className='w-[400px] bg-[#fafafa]' style={{ padding: "16px" }}>
            <p className='text-2xl border-b p-2'>Price details</p>
            <div className='flex flex-col gap-5 border-b p-2'>
                <div className='flex'>
                    <p>Price ({cart.length}) items</p>
                    <p style={{ marginLeft: "auto" }}>Rs {totalCartAmount}</p>
                </div>
                <div className='flex'>
                    <p>Delivery Charge</p>
                    <p style={{ marginLeft: "auto" }}>Rs {deliveryCharge}</p>
                </div>
            </div>

            <div className='flex border-b p-2'>
                <p>Total Amount</p>
                <p style={{ marginLeft: "auto" }}>Rs. {totalCartAmount+deliveryCharge}</p>
            </div>

            <div>
                <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    PLACE ORDER </button>
            </div>
        </div>
    )
}

export default PriceDetails
