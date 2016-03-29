import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    <div className="Cart">
    </div>
  }
}

reactMixin(Cart.prototype, PureRenderMixin)
