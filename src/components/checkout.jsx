import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {createStore} from 'redux'

class Checkout extends Component {
  render() {

    })
    return (
      <div id='checkout'>

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

export default connect(mapStateToProps)(Checkout)
