import { useParams } from "react-router-dom"
import { useContext } from 'react'
import Context from '../components/Context'

export default function ProductDetails() {
    const userData = useContext(Context)
    const params = useParams()
    let productData = null

    if (params.id === '1') {
        productData = {
            name: 'TV',
            price: 150.00,
            image: require('../assets/images/item1.jpg')
        }
    }

    return (
        <>
        <h1>Product Details</h1>
        <p>The product ID is {params.id}</p>
        <p>Cart Items: {userData.cartItems}</p>
        {
            productData != null ?
            <>
                <img src={productData.image} alt={productData.name} width="400"></img>
                <h2>{productData.name} - ${productData.price}</h2>
            </>
            : ''
        }
        </>
    )
}