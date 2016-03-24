import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Action} from '../../src/components/Cart.jsx'

describe('<Cart/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Cart/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of cart', () => {
    const wrapper = shallow(<Cart/>)
    expect(wrapper).to.have.className('Cart')
  })
})
