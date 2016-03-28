import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Cartcontainer } from '/Cart.jsx'
import { CarticonContainer } from '/Carticon.jsx'
import { Detailcontainer } from '/Detail.jsx'
import { Productscontainer } from '/Products.jsx'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    <div className="app">
      <ProductsContainer/>
      <CarticonContainer/>
    </div>

  }
}

reactMixin(App.prototype, PureRenderMixin)
