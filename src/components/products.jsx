import React, {Component} from 'react'
import {connect} from 'react-redux'

class Products extends Component {
  render() {

      }
    return (
      <div className='allProducts'></div>
    )
  }
}
function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Products)
