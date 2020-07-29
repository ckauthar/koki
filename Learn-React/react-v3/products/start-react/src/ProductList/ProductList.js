import React from 'react'
import './ProductList.css'

class ProductList extends Component {

    constructor(){
        super()
        this.state = {
            products: []
            searchInput: ''
        }
    }

    addProduct = (product) => {
        let products = this.state.products
        this.setState({
            product: [...products,product]
        })
    }

    handleSearch = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    render() {

        let filteredProducts = this.state.products.filter(product => {
            return product.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
        })
        return (
            <div className='ProductList'>
                <Form addProduct={this.addProduct}/>
                <div className='form__search'>
                    <input type='text' className='search__input' placeholder='search products' />
                </div>
            
                <div className='products'>
                    {
                        filteredProducts.map(product => {
                            return (
                            <Product title={product.title} price={product.price} quantity={product.quantity} imageUrl={product.imageUrl} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ProductList