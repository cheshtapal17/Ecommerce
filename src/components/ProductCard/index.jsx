import { useCart } from '../../context/cart-context'
import { findProductInCart } from '../../utils/findProductInCart'
import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
    const { cart, cartDispatch } = useCart()
    const isProductInCart = findProductInCart(cart, product.id)

    const navigate = useNavigate();

    const onCartClick = (product) => {
        if (!isProductInCart) {
            localStorage.setItem('cart',JSON.stringify([...cart,product]))
            cartDispatch({
                type: 'ADD_TO_CART',
                payload: { product }
            })
        }
        else {
            navigate('/cart');
        }
    }

    return (
        <>
            <div className="card card-vertical d-flex direction-column relative shadow">
                <div className="card-image-container">
                    <img className="card-image" src={product?.images[0]} alt="shoes" />
                </div>
                <div className="card-details">
                    <div className="card-des">{product?.title}</div>
                    <div className="card-description">
                        <p className="card-price">
                            Rs. {product?.price}
                        </p>
                    </div>
                    <div className="cta-btn">
                        <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                            <span className="material-symbols-outlined text-3xl hover:cursor-pointer">
                                favorite
                            </span>   Add To Wishlist
                        </button>
                        <button onClick={() => onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                            <span className="material-symbols-outlined text-3xl hover:cursor-pointer">
                                {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
                            </span>
                            {isProductInCart ? "Go To Cart" : "Add To Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
