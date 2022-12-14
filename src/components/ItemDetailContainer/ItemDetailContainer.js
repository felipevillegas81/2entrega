import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect (() => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading){
        return <h1>Cargando Detalle ...</h1>
    }

    return(
        <div>
            <h1>Detalle del Producto</h1>
            {/*<itemDetail {...product}/>*/}
        <div>{product?.name}</div>
        </div>
    )
        
}

export default ItemDetailContainer