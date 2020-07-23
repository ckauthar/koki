let name = document.querySelector('.name');
let price = document.querySelector('.price');
let form = document.querySelector('.form');
let products = document.querySelector('.products');

form.addEventListener('submit', function(event) {
    event.preventDefault()
    createProduct()
})

function createProduct() {
    let product = `
    <div class='product'>
        <h3>${name.value}</h3>
        <p>${price.value} $<p>
    </div>
`

products.insertAdjacentHTML('afterbegin',product)
name.value = ''
price.value = ''
}