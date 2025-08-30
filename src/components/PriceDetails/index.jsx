import React from 'react'
import { useCart } from '../../context/cart-context'
import { getTotalCartAmount } from '../../utils/getTotalProductPrice'
import { useNavigate } from 'react-router-dom'

function PriceDetails() {
    const { cart } = useCart()
    const totalCartAmount = getTotalCartAmount(cart)
    const deliveryCharge = 40;
      const navigate = useNavigate()

    const loadScript=(src)=>{
        return new Promise(resolve=>{
            const script = document.createElement("script");
            script.src=src;
            script.onload = ()=>resolve(true);
            script.onerror=()=>resolve(false);
            document.body.appendChild(script);
        });
    }

    const displayRazorPay=async()=>{
        await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        const options={
            key: "rzp_test_2bAS2dOrHVjQ1M",
            amount:(totalCartAmount+deliveryCharge)*100,
            currency:"INR",
            name:"Shop it",
            description:"Thank you for shopping with us :)",
            handler:({payment_id})=>{
                navigate("/")
            }
        }
        const paymentObject=new window.Razorpay(options);
        paymentObject.open();  
    }

    return (
        <div className='w-[400px] bg-[#fafafa]' style={{ padding: "16px" }}>
            <p className='text-2xl border-b p-2'>Price details</p>
            <div className='flex flex-col gap-5 border-b p-2'>
                <div className='flex'>
                    <p>Price ({cart.length}) items</p>
                    <p style={{ marginLeft: "auto" }}>R  s {totalCartAmount}</p>
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
                <button onClick={displayRazorPay} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    PLACE ORDER </button>
            </div>
        </div>
    )
}

export default PriceDetails
