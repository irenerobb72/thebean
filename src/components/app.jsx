import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Cart } from '/Cart.jsx'
import { Carticon } from '/Carticon.jsx'
import { Detail } from '/Detail.jsx'
import { Products } from '/Products.jsx'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    <div className="app"></div>

  }
}

reactMixin(App.prototype, PureRenderMixin)
