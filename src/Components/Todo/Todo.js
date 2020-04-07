import React from 'react'
import './Todo.css'
import trashIcon from './images/iconmonstr-trash-can-23.svg'
import plusIcon from './images/iconmonstr-plus-4.svg'

class Todo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    })
  }

  addItem(){
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    const list = [...this.state.list]
    console.log(list)
    list.push(newItem)

    this.setState({
      list,
      newItem: ""
    })
  }

  deleteItem(id){
    const list = [...this.state.list]

    const updatedList = list.filter(item => item.id !== id)

    this.setState({list: updatedList})
  }

  render(){
    return(
      <div className="todo">
        <div className="todo-container">
          <div className="todo-title">
            <input type="text" placeholder="Title" id="todo-title-input"/>
          </div>
          <ul className="todo-ul">
            {this.state.list.map(item => {
              return(
                <li key={item.id} className="todo-li">
                  <input type="checkbox" value="false" id="todo-checkbox-input" />
                  <input
                    type="text"
                    placeholder="Type item here..."
                    id="todo-li-input"
                  />
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}
                  >
                    <img src={trashIcon} />
                  </button>
                </li>
              )
            })}
          </ul>
          <button onClick={() => this.addItem() }><img src={plusIcon} /></button>
        </div>
      </div>
    )
  }
}

export default Todo;
