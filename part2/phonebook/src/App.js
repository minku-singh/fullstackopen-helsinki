import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    console.log("effect")
    axios.get("http://localhost:3001/persons")
    .then(response => {
      const persons = response.data
      setPersons(persons)
    })
  }, [])

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