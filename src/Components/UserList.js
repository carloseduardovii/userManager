import React from 'react'

const UserList = ({users}) => {

  console.log(users)

  return (
 
      <table>
        {/* <caption className='table-title'>User Manager</caption> */}
          <thead>
            <tr className='head-title'>
              <th>Name</th>
              <th>Last Name</th>
              <th>e-mail</th>
              <th>Password</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => (
                <tr key={user.id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.birthday}</td>
                  <td className='options-user'>
                    <button className='btn-edit circle'>
                      <i className="fa-solid fa-pen"></i>
                      </button>
                    &nbsp;
                    <button className='btn-delete circle'>
                      <i className="fa-solid fa-trash"></i>
                      </button>
                  </td>
                </tr>
              ) )
            }
            
          </tbody>
      </table>
   
  )
}

export default UserList