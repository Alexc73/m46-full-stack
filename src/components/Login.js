import React from "react"
import {useState} from "react"
import { loginUser } from "../utils"

const Login = ({newUser}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        await loginUser(username, email, password, newUser)
    }
    
    return (
      <div>
        <>
        <h1>Login Below</h1>

        <form onSubmit={submitHandler}>
        <label>Username:
            <input onChange={(e) => setUsername(e.target.value)}></input>
        </label>

        <label>Email:
            <input onChange={(e) => setEmail(e.target.value)}></input>
        </label>

        <label>Password:
            <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
        </label>

        <button type="submit">Click here to login</button>
        </form>
        </>
      </div>
    );
  }
  
  export default Login;


            {/* <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button> */}