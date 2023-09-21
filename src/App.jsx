/*Створити просту телефонну книгу.

✅ Додаток складається з 2 частин: Список контактів та форма додавання контакту
✅ Перемикання сторінок через кнопки/посилання вгорі сторінку
✅ реалізувати роутинг через state
✅ Н а сторінці Contacts є таблиця з 4-ма колонками (Ім'я, Прізвище, Телефон, Дії)
У таблиці відображається список контактів. У кожному рядку контакту є кнопка "видалити", яка видаляє контакт
✅На сторінці додавання контакту – форма. У формі три поля та дві кнопки (Зберегти та Скасувати).
Зберегти - зберігає контакт та повертається на сторінку зі списком контактів
✅"Скасувати" просто повертається до списку контактів.
✅Дані взяти з API: https://jsonplaceholder.typicode.com/users  

*/

import { useState} from 'react'
import './components/sass/app.scss'
import Header from './components/jsx/Header'
import UsersTable from './components/jsx/UsersTable'
import AddUser from './components/jsx/AddUser'

function App() {
  const [currentPage, setCurrentPage] = useState("usersTable");
  const[users, setUsers] = useState([]);
  function goTo(e){
    setCurrentPage(e.target.dataset['goto']);
  }
  return (
    <>
      <Header setPage={goTo}/>
      {currentPage == "usersTable" && <UsersTable users={users} setUsers={setUsers}/>}
      {currentPage == "addUser" && <AddUser setPage={goTo} users={users} setUsers={setUsers}></AddUser>}
    </>
  )
}

export default App;
