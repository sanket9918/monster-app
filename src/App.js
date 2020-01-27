import React, { Component } from 'react'
import './App.css'
import {CardList} from'./components/card-list/card-list-component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monster :[     
      ],
      searchField:'',
    }

    // this.handleChange=this.handleChange.bind(this) arrow function reduces the use of this 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster:users}))
  }

  handleChange = (e) =>
  {
   this.setState({searchField:e.target.value})
   console.log(e.target.value )
  }
  
  render(){
    const {monster,searchField} =this.state;
    const filterMonsters = monster.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      
      <div className="App">
      <h1>MonsterPedia</h1>
      <SearchBox 
        placeholder = 'Search Monsters'
        handleChange={this.handleChange}/>
      <CardList monster= {filterMonsters} />
     
      
  </div>
    )
  }
}

export default App