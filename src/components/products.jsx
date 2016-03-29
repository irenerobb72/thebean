import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import products from './data/products-state.js'

export class Products extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
    <div className="products">
      <div>
        <h1>The Bean</h1>
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

reactMixin(Products.prototype, PureRenderMixin)
