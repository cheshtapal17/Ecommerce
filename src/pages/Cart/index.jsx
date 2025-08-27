import React from 'react'
import Navbar from '../../components/Navbar'
import HorizontalProductCard from '../../components/HorizontalProductCard'
import { useCart } from '../../context/cart-context'
import PriceDetails from '../../components/PriceDetails';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cart } = useCart();
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <main className='d-flex flex-col items-center pt-6 '>
                <>{cart?.length > 0 ? (
                    <>   
                        <h2 className='text-3xl'>My Cart</h2>
                        <div className='flex gap-8'>
                            <div className='pt-4 d-flex flex-col gap-4'>
                                {cart?.length > 0 && cart.map(product => <HorizontalProductCard key={product.id} product={product} />)}
                            </div>
                            <div>
                                <PriceDetails />
                            </div>
                        </div>
                    </>
                ) : <div>
                    <h2 className='text-3xl'>Cart Empty</h2>
                    <p  className='text-[#14532D] hover:cursor-pointer underline' onClick={()=>navigate("/")}> Navigate me to the homepage </p>
                    </div>}
                </>
            </main>
        </>
    )
}

export default Cart
