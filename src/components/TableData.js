import React from 'react'

const TableData = ({id,data}) => {
  return (
    <>
      <td className="border border-black text-xl p-1" key={id}>
                  {data}
      </td>
    </>
  )
}

export default TableData