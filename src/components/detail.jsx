import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class Detail extends Component {
  render() {
    const allProducts = this.props.products.map((products.map products, index) => {
      return <div className='product'>{index}: {products}</div>
    })
      }
    return (
      <div className='detail'>
        <div className='product'>
          <img><a href='' onClick={img}</a></img>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Detail)
