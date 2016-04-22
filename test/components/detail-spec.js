import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Checkout} from '../../src/components/Detail.jsx'

describe('<Detail/>', () => {
  it('renders without props', () => {
    const wrapper = shallow(<Detail/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of detail', () => {
    const wrapper = shallow(<Detail/>)
    expect(wrapper).to.have.className('detail')
  })
})
