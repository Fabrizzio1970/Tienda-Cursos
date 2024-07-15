const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    alert('funciona')
    containerCartProducts.classList.toggle('hidden-cart')
})