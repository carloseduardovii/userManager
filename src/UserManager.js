import axios from 'axios'
import React, {useState, useEffect} from 'react'
import UserForm from './Components/UserForm'
import UserList from './Components/UserList'




export const UserManager = () => {

  const [users, setUsers] = useState([])
  
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  useEffect(() => {
    getUsers()
  }, [])
  //console.log(users)

  return (
    <>
    <div className='toolbar'>
      <div className='toolbar-btn'>
        <button className='btnplus'><i className="fa-solid fa-user-plus"></i> New</button>
      </div>

    </div>

   
    <UserForm getUsers={getUsers}/>
    
    <UserList users={users}/>

    </>
  )
}
