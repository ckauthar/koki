let section = document.querySelector('.products')


let products = [
    {
        name: 'Android Development with Kotlin',
        price: 10,
        description: 'learn android with kotlin from scratch and build some android apps',
        students: 6599,
        hours: 25
    },
    {
        name: 'Web Development with PHP',
        price: 50,
        description: 'learn aweb with php from scratch and build some web apps',
        students: 4599,
        hours: 20
    },
    {
        name: 'Game Development with Unity',
        price: 80,
        description: 'learn game with unity from scratch and build some games',
        students: 6599,
        hours: 35
    },
]

products.map((product) => {
    
    let item = `
           <div class='product'>
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.description}</p>
                <p>${product.hours}</p>
           </div>`

           section.insertAdjacentHTML('afterbegin', item)
})