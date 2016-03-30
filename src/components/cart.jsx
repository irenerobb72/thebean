import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as productMovement from '../product-movement'

export class Cart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Cart">
      </div>
    )
  }
}

reactMixin(Cart.prototype, PureRenderMixin)
