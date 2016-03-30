import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { CarticonContainer } from '/Carticon.jsx'
import { Productscontainer } from '/Products.jsx'
import * as actionCreators from '../action_creators'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        <ProductsContainer/>
        <CarticonContainer/>
      </div>
    )
  }
}

reactMixin(App.prototype, PureRenderMixin)
