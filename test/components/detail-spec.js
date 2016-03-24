import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Action} from '../../src/components/Detail.jsx'

describe('<Detail/>', () => {
  xit('renders without any props', () => {
    const wrapper = shallow(<Detail/>)
    expect(wrapper).to.be.ok
  })
  xit('has a classname of carticon', () => {
    const wrapper = shallow(<Detail/>)
    expect(wrapper).to.have.className('Detail')
  })
})
