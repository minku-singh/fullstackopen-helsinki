import { useState } from 'react'
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtered, setFiltered] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    let newPerson = {
        name: newName,
        number: newNumber
    }
    let alreadyExists = persons.find(person => person.name === newPerson.name)
    if(alreadyExists !== undefined){
        alert(`Oops! ${newPerson.name} already exists!`)
        return
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  function handleFilter(e){
    let input = e.target.value;
    let newFilter = persons.filter(person => person.name.includes(input))
    // let newFilter = caseSwitchPersonName.filter(caseSwitchPersonNameEach => caseSwitchPersonNameEach.includes(caseSwitchInput))
    if(input === ""){
        setFiltered([])
        return
    }
    setFiltered(newFilter)
  }
  function handleNameChange(e){
    setNewName(e.target.value)
  }
  function handleNumberChange(e){
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter = {handleFilter} filtered = {filtered} />
      <PersonForm handleSubmit={handleSubmit} handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App