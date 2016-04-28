import React, {Component} from 'react'
import {connect} from 'react-redux'

class Products extends Component {
  render() {
    const allProducts = this.props.products.map((products, index) => {
      return <div className='productsList'>{index}: {products}</div>
    })
      }
    return (
      <div className='allProducts'></div>
    )
  }
}
function mapStateToProps(state) {
  return {
    products: state.get('products')
  }
}

export default connect(mapStateToProps)(Products)
