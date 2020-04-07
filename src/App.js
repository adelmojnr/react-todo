import React from 'react';
import Header from './Components/Header/Header'
import Todo from './Components/Todo/Todo'
import './App.css'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <body>
          <Todo />
        </body>
      </div>
    )
  }
}
export default App;

