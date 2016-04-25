import React, {Component} from 'react'

export default class Summary extends Component {
  render() {
    const allProducts = this.props.products.map((products, index => {
      return <div className='products'>{index}: {products} </div>
    }))
    return (
      <div className='summary'>
        
      </div>
    )
  }
}
