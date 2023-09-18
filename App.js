import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1); 
  const [editText, setEditText] = useState(''); 

  function addToList() {
    const tempList = [...list];
    tempList.push(userInput);
    setList(tempList);
    setUserInput(''); 
  }

  function updateInput(e) {
    setUserInput(e.target.value);
  }

  function deleteItem(index) {
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);
  }

  
  function editItem(index) {
    setEditIndex(index);
    setEditText(list[index]);
  }

 
  function saveEdit(index) {
    const tempList = [...list];
    tempList[index] = editText;
    setList(tempList);
    setEditIndex(-1); 
    setEditText(''); 
  }

  function cancelEdit() {
    setEditIndex(-1);
    setEditText(''); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={updateInput} value={userInput} placeholder='Add any item' />
        <button onClick={addToList}>Add</button>
        <ul>
          {list.map(function (item, index) {
            return (
              <li key={index}>
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => saveEdit(index)}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    {item}
                    <button onClick={() => deleteItem(index)}>Delete</button>
                    <button onClick={() => editItem(index)}>Edit</button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;