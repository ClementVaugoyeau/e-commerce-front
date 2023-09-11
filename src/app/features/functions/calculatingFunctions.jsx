
export const getTotal = (productsBasket) => {
    let totalQuantity = 0
    let sousTotal = 0
    let totalPrice = 0
    let delivery = 5.0
    productsBasket.forEach(product => {
        totalQuantity += product.quantity
        sousTotal += product.price * product.quantity
    })
    if(totalQuantity <= 0){
        delivery = 0;
    }
    totalPrice = sousTotal + delivery
    sousTotal = (Math.round(( sousTotal + Number.EPSILON ) * 100 ) / 100).toFixed(2)
    totalPrice = (Math.round(( totalPrice + Number.EPSILON ) * 100 ) / 100).toFixed(2)
    return {sousTotal, totalPrice, totalQuantity, delivery}
    }

