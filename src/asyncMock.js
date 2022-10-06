const products = [

    {
        id: '1',
        name: 'Gafas Rojas',
        price: 200000,
        category: 'glasses',
        stock: 50,
        description: 'Gasfas de Marco Grueso Color Rojo'
    },

    {
        id: '2',
        name: 'Lentes Negros',
        price: 300000,
        category: 'lents',
        stock: 20,
        description: 'GLentes color Negro Profundo'
    },

    {
        id: '3',
        name: 'Gafas de Sol Color Cafe',
        price: 300000,
        category: 'sunglasses',
        stock: 20,
        description: 'Gafas de sol con filtro UV'
    }

]


export const getProducts = () => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1500)
    })
}

export const getProductsbyCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}
