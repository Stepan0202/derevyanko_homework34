import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/sass/app.scss'
import Header from './components/jsx/header'
import UsersTable from './components/jsx/UsersTable'

function App() {
  return (
    <>
      <Header />
      <UsersTable />
    </>
  )
}

export default App;
