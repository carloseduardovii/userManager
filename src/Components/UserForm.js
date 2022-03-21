import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({getUsers, selectUser, unSelectUser}) => {
   
  const { register, handleSubmit, reset  } = useForm();

  useEffect(() => {
        if(selectUser){
                const userSelectedEdit = {
                        firstname: selectUser.first_name,
                        lastname: selectUser.last_name,
                        email: selectUser.email,
                        password: selectUser.password,
                        birthday: selectUser.birthday
                        }

                        reset(userSelectedEdit)
                }
   }, [selectUser, reset])

  const submit = (data, e) => {
        //console.log(data)
        const userInfo = {
                first_name: data.firstname,
                last_name: data.lastname,
                email: data.email,
                password: data.password,
                birthday: data.birthday
        }

        if(selectUser){
                axios.put(`https://users-crud1.herokuapp.com/users/${selectUser.id}/`, userInfo)
                        .then(() => {getUsers()
                                     unSelectUser()
                })
                        
        }else{
                axios.post('https://users-crud1.herokuapp.com/users/', userInfo)
                        .then(() => getUsers())
        }

        e.target.reset()
  }

  
  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit(submit)}>
      {/* First Name */}
      <input  type="text" 
              name='firstname'
              placeholder='Name'
              {...register("firstname")}/>

      {/* Last Name */}  
      <input  type="text" 
              name='lastname'
              placeholder='Last Name'
              {...register("lastname")}/>

      {/* e-mail */}
      <input  type="text" 
              name='email'
              placeholder='e-mail'
              {...register("email")}/>

      {/* Password */}
      <input  type="text" 
              name='password'
              placeholder='Password'
              {...register("password")}/>

      {/* Birtheday */}
      <input  type="text" 
              name='birthday'
              placeholder='Birthday (AAAA-MM-DD)'
              {...register("birthday")}/>

      {/* User Register */}
      <input  type="submit" 
              value='User Register'
              />
                    
    </form>

    </div>
  )
}

export default UserForm