import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class Detail extends Component {
  render() {
    const allProducts = this.props.products.map((products.map products, index) => {
      return <div className='product'>{index}: {products}</div>
    })
      }
    return (
      <div className='detail'>
          <h6>{this.props.name}</h6>
          <img><a href='' onClick={img}</a></img>
          {allProducts}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart: (id) => {
      dispatch({
        type: 'ADD_TO_CART'
        id: parseInt(id)
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
