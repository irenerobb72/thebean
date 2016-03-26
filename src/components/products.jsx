import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Products extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const products =
    return (
      <div className="products">
        <div>
          <h1>The Bean</h1>
        </div>
        { products }
      </div>
    )
  }
}

reactMixin(Products.prototype, PureRenderMixin)
