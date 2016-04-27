import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Checkout} from '../../src/components/Checkout.jsx'

describe('<Checkout/>', () => {
  it('renders without props', () => {
    const wrapper = shallow(<Checkout/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of checkout', () => {
    const wrapper = shallow(<Checkout/>)
    expect(wrapper).to.have.className('checkout')
  })
  it('renders the correct product name', () => {
    const wrapper = shallow(<Checkout name='case'/>)
  })
})
