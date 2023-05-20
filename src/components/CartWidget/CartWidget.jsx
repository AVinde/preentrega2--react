import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../img/1172027-middle.png";
  
    return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        <strong> 3 </strong>
    </div>
  )
}

export default CartWidget