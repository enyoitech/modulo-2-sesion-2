import { useState } from 'react'
import logo from './logo.svg'
import { ComponenteSaludo } from './ComponenteSaludo'
import './App.css'

function App() {

  return (
    <div >
      <ComponenteSaludo
        nombre={'Pablo Aguilar Pinto'}
      />
    </div>
  )
}

export default App
