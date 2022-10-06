import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsbyCategory } from "../../asyncMock"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId){
            getProducts().then(res => {
                console.log(res)
                setProducts(res)
            }).catch(error => {
                console.log(error)
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
        } else {  
            getProductsbyCategory(categoryId).then(res => {
                console.log(res)
                setProducts(res)
            }).catch(error => {
                console.log(error)
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
        }
        
    }, [categoryId])

    if(loading){
        return <h1>Cargando Productos ...</h1>
    }

    if(error){
        return <h1>Error en la transmision de datos</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer