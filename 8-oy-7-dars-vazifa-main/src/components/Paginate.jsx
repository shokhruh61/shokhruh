import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Paginate() {
  const [page, setPage] = useState(1);

  function getData({ queryKey }) {
    const page = queryKey[1];
    return axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`);
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", page],
    queryFn: getData,
  });

  function handlePrevious() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNext() {
    if (page < 2) {
      setPage(page + 1);
    }
  }

  return (
    <div className="p-10 mt-[50px] container mx-auto">
      <h1 className="text-center mt-2 mb-2 text-3xl font-serif font-extrabold">Paginate</h1>
      {isLoading && <p className='text-4xl font-extrabold mt-10 font-serif text-center text-blue-500'>Loading...</p>}
      {isError && <p className='text-4xl font-extrabold mt-10 font-serif text-center text-red-500'>An error occurred!</p>}

      <ul className="flex gap-4 flex-wrap items-center justify-center">
        {data?.data.length > 0 && data?.data.map((user, index) => (
          <li key={index} className="border p-3 rounded-md w-1/3 flex flex-col items-center justify-center gap-2">
            <h2 className='text-2xl font-bold font-mono'>{user.id}</h2>
            <h2 className="font-serif text-xl font-medium">{user.name}</h2>
            <h3 className="font-serif text-lg font-semibold">{user.email}</h3>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrevious}
          disabled={page == 1}
          className="cursor-pointer px-4 py-2 border hover:bg-black hover:text-white hover:border-none transition-all rounded-lg"
        >
          Previous
        </button>
        <h2 className="text-xl font-semibold text-black font-mono">Page: {page}</h2>
        <button
          onClick={handleNext}
          className="cursor-pointer px-4 py-2 border hover:bg-black hover:text-white hover:border-none transition-all rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Paginate;
