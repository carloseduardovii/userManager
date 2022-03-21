import axios from 'axios';
import { useForm } from 'react-hook-form';

const UserForm = ({getUsers}) => {
   
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
        //console.log(data)
        const userInfo = {
                first_name: data.firstname,
                last_name: data.lastname,
                email: data.email,
                password: data.password,
                birthday: data.birthday
        }

        axios.post('https://users-crud1.herokuapp.com/users/', userInfo)
                .then(() => getUsers())
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
              placeholder='Birthday'
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