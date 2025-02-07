import React from 'react'
import useCounterStore from '../store/useCounterStore'
function Counter() {

  const { count, increment, decrement } = useCounterStore()
  return (
    <div className="mt-[90px] flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center mb-4 font-mono">
        {count}
      </h1>
      <div className="flex space-x-6">
        <button
          onClick={increment}
          className="cursor-pointer bg-blue-500 text-white px-6 p-2 rounded-xl text-lg font-semibold font-serif"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="cursor-pointer bg-red-500 text-white px-6 p-2 rounded-xl text-lg font-semibold font-serif"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
