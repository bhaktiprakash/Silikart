import { useState, useEffect } from "react";
import axios from "axios"
import UserCard from "./UserCard";

const ApiDemo = () => {
    const [users, setUsers]=useState([])
    async function getData(){
        let res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data);
        setUsers(res.data)
    }
    useEffect(()=>{
        getData()
    }, [])
  return (
    <div className="d-flex flex-wrap">
      {/* {users.map(user => <h1 key={user.id}>{user.name}</h1>)} */}
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  )
}

export default ApiDemo
