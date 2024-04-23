import React from 'react'

const UserCard = ({user}) => {
    const {name, email} = user
  return (
    <div className='card m-2'>
        <div className="card-body">
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
    </div>
  )
}
export default UserCard
