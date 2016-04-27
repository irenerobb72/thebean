import React, {Component} from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
  render() {
    const allProducts = this.props.products.map((products, index) => {
      return <div className='cart'>{index}: {products}</div>
    })
    return (
      <div className='products'>
        {products}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  }
}

export default connect(mapStateToProps)(Cart)
