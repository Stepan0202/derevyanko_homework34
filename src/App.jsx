import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/sass/app.scss'
import Header from './components/jsx/Header'
import UsersTable from './components/jsx/UsersTable'
import AddUser from './components/jsx/AddUser'

function App() {
  const [currentPage, setCurrentPage] = useState("addUser");
  return (
    <>
      <Header />
      {currentPage == "usersTable" && <UsersTable />}
      {currentPage == "addUser" && <AddUser></AddUser>}
    </>
  )
}

export default App;
