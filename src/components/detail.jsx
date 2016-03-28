import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Detail extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    e.preventDefault()
  }
  render() {

  }
  return (
    <div className="detail" id={this.props.}>

    </div>
  )
}

reactMixin(Detail.prototype, PureRenderMixin)
