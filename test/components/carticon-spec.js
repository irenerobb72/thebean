import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map } from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Carticon } from '../../src/components/Carticon.jsx'

describe('<Carticon/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Carticon/>)
    expect(wrapper).to.be.ok
  })
  xit('has a classname of carticon', () => {
    const wrapper = shallow(<Carticon/>)
    expect(wrapper).to.have.className('Carticon')
  })
  xit('renders name of cart', () => {
    const wrapper = shallow(<Carticon/>)
    expect(wrapper).to.have.text('Your cart')
  })
})
