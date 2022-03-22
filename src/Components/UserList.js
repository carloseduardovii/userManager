import React from 'react'
import Swal from 'sweetalert2'

const UserList = ({users, userSelect, deleteUser}) => {


  const userDelete  = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  

  return (
 
      <table className='table-user'>
        {/* <caption className='table-title'>User List</caption> */}
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
                    <button className='btn-edit circle' onClick={() => userSelect(user)}>
                      <i className="fa-solid fa-pen"></i>
                      </button>
                    &nbsp;
                    <button className='btn-delete circle' onClick={() => userDelete(user.id)}>
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