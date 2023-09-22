import {useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import fetchUsers from '../js/fetchData';
function UsersTable({users, setUsers}){
    function deleteUser(e){
      const userID = e.target.dataset.userid;
      const newTable = users.filter(user => user.id != userID);
      setUsers(newTable);
      localStorage.setItem('users', JSON.stringify(newTable));
    }

    useEffect(()=>{fetchUsers(setUsers)}, [])
    return (
      <>
        <div className="usersTable">
            <div className="usersTable__row usersTable__row_header">
                <div className="usersTable__header">ID</div>
                <div className="usersTable__header">Name</div>
                <div className="usersTable__header">Username</div>
                <div className="usersTable__header">E-mail</div>
                <div className="usersTable__header">Phone</div>
                <div className="usersTable__header">Website</div>
                <div className="usersTable__header">Controls</div>
            </div>
          {users.map((user) => (
            <div className="usersTable__row" key={user.id}>
                <div className="usersTable__item key">{user.id ? user.id : "—"}</div>
                <div className="usersTable__item name">{user.name ? user.name : "—"}</div>
                <div className="usersTable__item username">{user.name ? user.username : "—"}</div>
                <div className="usersTable__item email">{user.email ? user.email : "—"}</div>
                <div className="usersTable__item phone">{user.phone ? user.phone : "—"}</div>
                <div className="usersTable__item website">{user.website ? user.website : "—"}</div>
                <div className="usersTable__item"><Button className="btn" variant="warning" color="white" data-userid={user.id} onClick={deleteUser}>Delete</Button></div> 
            </div>
          ))}
        </div>
      </>
    )
}
export default UsersTable;