import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Carticon extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const products = this.props.products.map((id, index) => {
      return <div className="product">{index}: <span>+{id}</span></div>
    })
    return (
      <div className="carticon">
        {products}
      </div>
    )
  }
}

reactMixin(Carticon.prototype, PureRenderMixin)
