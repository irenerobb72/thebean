import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Products} from '../../src/components/Products.jsx'

describe('<Products/>', () => {
  it('renders without props', () => {
    const wrapper = shallow(<Products/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of products', () => {
    const wrapper = shallow(<Products/>)
    expect(wrapper).to.have.className('products')
  })
})
