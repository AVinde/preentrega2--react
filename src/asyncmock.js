 const productos = [
    { nombre: "Procesador", precio: 45000, id: "1", img: "../img/intel_i9_13900k.png", idCat: "2" },
    { nombre: "Placa de video ", precio: 180000, id: "2", img: "../img/Radeon RX 6800 XT.jpg", idCat: "3" },
    { nombre: "Procesador", precio: 45000, id: "1", img: "../img/intel_i9_13900k.png", idCat: "2" },
    { nombre: "Gabinete", precio: 26000, id: "3", img: "../img/Thermaltake Versa T35.jpg", idCat: "4" },
    { nombre: "Procesador", precio: 45000, id: "1", img: "../img/intel_i9_13900k.png", idCat: "2" },
    { nombre: "Monitor ", precio: 40000, id: "4", img: "../img/Monitor.jpg", idCat: "5" },
    { nombre: "Placa de video ", precio: 180000, id: "2", img: "../img/Radeon RX 6800 XT.jpg", idCat: "3" },
    { nombre: "Gabinete", precio: 26000, id: "3", img: "../img/Thermaltake Versa T35.jpg", idCat: "4" },
    { nombre: "Monitor", precio: 40000, id: "6", img: "../img/Monitor.jpg", idCat: "5" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 500)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 500)
    })
}