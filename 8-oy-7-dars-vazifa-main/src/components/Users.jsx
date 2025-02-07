import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

function Users() {
  function getData() {
    return axios.get("https://jsonplaceholder.typicode.com/users/")
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: 'users',
    queryFn: getData
  });
  return (
    <div className='mt-[90px]'>
      <h1 className='text-center mt-2 mb-2 text-3xl font-serif font-extrabold'>USERS DATA</h1>
      {
        isLoading && <h2 className='text-4xl font-extrabold mt-10 font-serif text-center'>Loading...</h2>
      }
      {
        isError && <h2 className='text-4xl font-extrabold mt-10 font-serif text-center'>Xatolik keldi</h2>
      }

      <ul className='flex flex-wrap items-center gap-5 justify-center'>
        {
          data?.data.length > 0 && data?.data.map((user, index) => {
            return (
              <li key={index} className='w-[30%] border rounded-lg p-5 flex flex-col gap-3 text-center'>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <h4>{user.phone}</h4>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Users
