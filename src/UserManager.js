import axios from 'axios'
import React, {useState, useEffect} from 'react'
import UserForm from './Components/UserForm'
import UserList from './Components/UserList'




export const UserManager = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/swagger/')
      .then(res => setUsers(res.data))
    
  }, [])
  //console.log(users)

  return (
    <>
    <div className='toolbar'>
      <div className='toolbar-btn'>
        <button className='btnplus'><i className="fa-solid fa-user-plus"></i> New</button>
      </div>

    </div>

   
    <UserForm/>
    
    <UserList users={users}/>

    </>
  )
}
