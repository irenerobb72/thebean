import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Cart} from '../../src/components/Cart.jsx'

describe('<Cart/>', () => {
  xit('renders without props', () => {
    const wrapper = shallow(<Cart/>)
    expect(wrapper).to.be.ok
  })
  xit('has a classname of cart', () => {
    const wrapper = shallow(<Action/>)
    expect(wrapper).to.have.className('cart')
  })
})
