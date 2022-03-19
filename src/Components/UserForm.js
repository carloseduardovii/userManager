import React from 'react'

const UserForm = () => {
  return (
    <div className='form-container'>
    <form >
      {/* First Name */}
      <input  type="text" 
              id='Description' 
              placeholder='Name'/>

      {/* Last Name */}  
      <input  type="text" 
              id='Description' 
              placeholder='Last Name'/>

      {/* e-mail */}
      <input  type="text" 
              id='Description' 
              placeholder='e-mail'/>

      {/* Password */}
      <input  type="text" 
              id='Description' 
              placeholder='Password'/>

      {/* Birtheday */}
      <input  type="text" 
              id='Description' 
              placeholder='Birthday'/>

      {/* User Register */}
      <input  type="Submit" 
              value='User Register'/>
                    
    </form>
        

    </div>
  )
}

export default UserForm