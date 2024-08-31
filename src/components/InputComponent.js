import React from 'react'

const InputComponent = ({type,placeholderText,css}) => {
  return (
    <>
      <input className={css} type={type} placeholder={placeholderText} />
    </>
  )
}

export default InputComponent