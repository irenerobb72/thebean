import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Carticon extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    e.preventDefault()
  }
  render() {
  }
}

reactMixin(Carticon.prototype, PureRenderMixin)
