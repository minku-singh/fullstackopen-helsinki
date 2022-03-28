import React from 'react'

function Filter({handleFilter, filtered}) {
  return (
    <div>
        filter shown with <input onChange={handleFilter} type = "text" />
        {filtered.length === 0 ? "" : filtered.map((filteredName, id) => <p key={id}>{filteredName.name}</p>)}
    </div>
  )
}

export default Filter