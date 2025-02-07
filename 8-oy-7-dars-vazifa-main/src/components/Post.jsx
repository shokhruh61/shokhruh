import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import axios from 'axios';

function Post() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');

  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: (newUser) => {
      return axios.post('https://jsonplaceholder.typicode.com/users', newUser);
    },
    onSuccess: () => {
      console.log('User added successfully!');
      setTitle('');
      setEmail('');
    },
  });

  function handlePost(e) {
    e.preventDefault();
    if (!title || !email) {
      alert("All input fields must be filled in!")
      return
    } else if (title.length < 3) {
      alert("The title is not clear, try to write it more clearly!")
      return
    } else if (!email.includes("@")) {
      alert("Invalid email!")
      return
    } else if (!email.includes(".com")) {
      alert("Invalid email!")
      return
    }
    const newUser = {
      name: title,
      email: email,
    };
    mutate(newUser);
  }

  return (
    <div className='mt-[90px] p-8 flex justify-center'>
      <form className='flex flex-col gap-4 w-[450px] bg-white shadow-lg rounded-xl p-6'>
        <h2 className='text-center mt-2 mb-2 text-2xl font-serif font-bold'>POST MUTATION</h2>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full px-4 py-3 font-serif border-gray-300 border rounded-lg focus:outline-none text-lg'
            type="text"
            placeholder="Enter title..."
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-3 font-serif border-gray-300 border rounded-lg focus:outline-none text-lg'
            type="email"
            placeholder="Enter email..."
          />
        </div>

        {isLoading && <p className='text-4xl font-extrabold mt-10 font-serif text-center text-blue-500'>Loading...</p>}
        {isError && <p className='text-4xl font-extrabold mt-10 font-serif text-center text-red-500'>An error occurred!</p>}
        {isSuccess && <p className='text-4xl font-extrabold mt-10 font-serif text-center text-green-500'>User added successfully!</p>}

        <button
          onClick={handlePost}
          className='w-full bg-green-500 active:scale-95 cursor-pointer text-white font-serif text-xl font-bold py-3 rounded-lg hover:bg-green-600 transition'
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Post;
