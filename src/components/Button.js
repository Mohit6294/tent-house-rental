import React from 'react'

const Button = ({text}) => {
  return (
    <>
        <button className="p-2 m-2 bg-slate-400 rounded-lg border border-red-500 text-white w-52">
          {text}
          </button>
      
    </>
  )
}

export default Button