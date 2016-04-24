import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class Detail extends Component {
  render() {

      }
    return (
      <div className='detail'>
        <div className='product'></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Detail)
