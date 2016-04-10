import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as productMovement from '../product-movement'
import products from '../data/product-state'

export class Products extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
    <div className="products">
      <div>
        <h6>{this.props.products}</h6>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  }
}

export const ProductsContainer = connect(mapStateToProps, productMovement)(Products)
