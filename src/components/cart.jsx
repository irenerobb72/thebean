import React, {Component} from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
  render() {

    })
    return (
      <div id='cart'>
        <div className='products'>
        </div>
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
