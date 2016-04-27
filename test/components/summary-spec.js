import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Checkout} from '../../src/components/Summary.jsx'

describe('<Summary/>', () => {
  it('renders without props', () => {
    const wrapper = shallow(<Summary/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of summary', () => {
    const wrapper = shallow(<Summary/>)
    expect(wrapper).to.have.className('summary')
  })
  it('renders the correct product name', () => {
    const wrapper = shallow(<Summary name='case'/>)
  })
})
