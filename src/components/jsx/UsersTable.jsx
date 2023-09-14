import { useState, useEffect } from 'react';
function UsersTable(){
    const[users, setUsers] = useState([]);
    async function fetchData(){
      try{
        if(!localStorage['users']){
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) throw new Error("Something wrong with server`s response!");
          const data = await response.json();
          localStorage.setItem('users', JSON.stringify(data));
        }
        const storedData = JSON.parse(localStorage.getItem('users'));
        console.dir(storedData);
        setUsers(storedData);
      }
      catch(error){
        console.error('Error fetching data:', error);
      }
    }
    useEffect(()=>{fetchData()}, [])
    return (
      <>
        <div className="usersTable">
            <div className="usersTable__row usersTable__row_header">
                <div className="usersTable__header">ID</div>
                <div className="usersTable__header">Name</div>
                <div className="usersTable__header">Username</div>
                <div className="usersTable__header">E-mail</div>
                <div className="usersTable__header">Address</div>
                <div className="usersTable__header">Phone</div>
                <div className="usersTable__header">Website</div>
                <div className="usersTable__header">Company</div>
            </div>
          {users.map((user) => (
            <div className="usersTable__row">
                <div className="usersTable__item key">{user.id ? user.id : "—"}</div>
                <div className="usersTable__item name">{user.name ? user.name : "—"}</div>
                <div className="usersTable__item username">{user.name ? user.username : "—"}</div>
                <div className="usersTable__item email">{user.email ? user.email : "—"}</div>
                <div className="usersTable__item address">{user.address.street}</div>
                <div className="usersTable__item phone">{user.phone ? user.phone : "—"}</div>
                <div className="usersTable__item website">{user.website ? user.website : "—"}</div>
                <div className="usersTable__item company">{user.company.name}</div>
            </div>
          ))}
        </div>
      </>
    )
}
export default UsersTable;