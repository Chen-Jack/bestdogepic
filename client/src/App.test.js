/* globals jest test expect describe */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ImageUploader } from './components/ImageUploader'

import { shallow, mount, render } from 'enzyme'

test('renders without crashing', () => {
  shallow(<App />)
})

describe('ImageUploader component', () => {
  test('Matches snapshot', () => {
    const wrapper = shallow(<ImageUploader />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Has a file input field', () => {
    const wrapper = shallow(<ImageUploader />)
    expect(wrapper.exists('input[type="file"]')).toBe(true)
  })

  test('Should dispatch action', () => {
    const mockDispatch = jest.fn(() => {
      console.log('Sending data')
    })
    const wrapper = shallow(<ImageUploader startUpload={mockDispatch} />)
    expect(wrapper.exists('button')).toBe(true)

    const submitBtn = wrapper.find('button')
    submitBtn.simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
