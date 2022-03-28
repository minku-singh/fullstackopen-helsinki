import React from 'react'

function PersonForm({handleSubmit, handleNameChange, handleNumberChange}) {
  return (
    <form onSubmit = {handleSubmit}>
        <h2>Add a new</h2>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
            number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

export default PersonForm