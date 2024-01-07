import React from 'react'
import { userStore } from '../Global/API/store'

const User = () => {
    const user = userStore(store=>store.userInfo);
  return (
    <div>
        <h1>{user.author_name}</h1>
        <h2>{user.email}</h2>
    </div>
  )
}

export default User