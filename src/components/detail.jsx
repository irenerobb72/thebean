import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as productMovement from '../product-movement'

export class Detail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const name = this.props.product.get('name')
    const id = this.props/product.get('id')
    const price = this.props.product.get('price')
  }
  return (
    <div className="detail" id={this.props.}>
      <div id='name'> {name}&nbsp;</div>
      <Link to={`/products/${id}`}>${price}</Link>
    </div>
  )
}


reactMixin(Detail.prototype, PureRenderMixin)
