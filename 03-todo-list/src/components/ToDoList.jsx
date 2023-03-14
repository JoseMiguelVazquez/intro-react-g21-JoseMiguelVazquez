import React, { useState } from 'react'

const ToDoList = () => {
  const [inputValue, setinputValue] = useState('')
  const handleAdd = () => {
    console.log('Agregué', inputValue)
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setinputValue(event.target.value)}
      />
      <button className='add-button' onClick={handleAdd}>Agregar</button>
      <ul>
        <li>Item 1
          <button>Eliminar</button>
        </li>
        <li>Item 2
          <button>Eliminar</button>
        </li>
        <li>Item 3
          <button>Eliminar</button>
        </li>
      </ul>
    </div>
  )
}

export default ToDoList
