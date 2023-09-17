import {useState} from 'react'
import './App.css'

// Replace your code here
const App = () => {
  const [stringsArray, saveStringsToArray] = useState([])
  const [userInput, changeInput] = useState('')

  const displayInputListItems = () => (
    <ul className="user-input-list-container">
      {stringsArray.map(item => (
        <li className="list-item-text">
          {item} : <span className="character-count-text">{item.length}</span>
        </li>
      ))}
    </ul>
  )
  const saveStrings = () => {
    saveStringsToArray([...stringsArray, userInput])
    changeInput('')
  }

  return (
    <div className="main-container">
      <div className="character-counter-body-container">
        <div className="character-counter-results-display-container">
          <div className="character-counter-heading-container">
            <h1 className="counter-heading-text">
              Count the characters like <br />a Boss..
            </h1>
          </div>

          {stringsArray.length === 0 ? (
            <img
              alt="no user inputs"
              className="no-character-image"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            />
          ) : (
            displayInputListItems()
          )}
        </div>
        <div className="character-counter-input-body-container">
          <h1 className="character-counter-input-heading">Character Counter</h1>
          <div className="input-container">
            <input
              placeholder="Enter the Characters here"
              className="counter-text-input"
              type="text"
              onChange={e => changeInput(e.target.value)}
              value={userInput}
            />
            <button onClick={() => saveStrings()} className="add-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
