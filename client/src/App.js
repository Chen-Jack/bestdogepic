import React from 'react'
import logo from './logo.svg'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

import ImageUploader from './components/ImageUploader'

function App () {
  return (
    <Provider store={store} >
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ImageUploader />
        </header>
      </div>
    </Provider>
  )
}

export default App
