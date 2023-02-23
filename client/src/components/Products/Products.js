import style from './Products.module.css'
// import products from '../../storage/products'
import ProductItem from './ProductItem'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Products() {
    const [products, setProducts] = useState([])

    async function getProducts(){
        const response = await axios.get("/products")
        setProducts(response.data)
        console.log(response.data);
    }

    useEffect(()=>{
        getProducts()
    }, [])
    return (
        <>
            <div className={style['boorivia-store']}> </div>
            <div className={style['products-wrapper']}>
                {products.map((el) => <ProductItem key={el.id} id={el.id} title={el.title} price={el.price} />)}
            </div>


        </>

    )
}
export default Products