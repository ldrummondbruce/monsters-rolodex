import React, { Component } from "react";
// import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list-component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        // {
        //   name: "Frankenstein",
        //   id: "sdsd",
        // },
        // {
        //   name: "Dracula",
        //   id: "djksj",
        // },
        // {
        //   name: "Zombie",
        //   id: "dklc",
        // },
      ],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // .then((response) => console.log(response))
      .then((response) => response.json())
      // .then((users) => console.log(users));
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;
    // const filteredMonsters = monsters.filter((monster) => {
    //   return monster.name.toLowerCase().includes(searchField.toLowerCase());
    // });
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        {/* <input
          type="search"
          placeholder="search monsters..."
          onChange={(e) => this.setState({ searchField: e.target.value })}
        /> */}
        <SearchBox
          placeholder="search monsters..."
          // handleChange={(e) => this.setState({ searchField: e.target.value })}
          handleChange={this.handleChange}
        />
        {/* <CardList monsters={this.state.monsters} /> */}
        <CardList monsters={filteredMonsters} />
        {/* <CardList monsters={this.state.monsters}> */}
        {/* <h1>I am one of the props.children</h1> */}
        {/* {this.state.monsters.map((monster) => (
            <h1 key={monster.id}> {monster.name} </h1>
          ))} */}
        {/* </CardList> */}
      </div>
    );
  }
}

export default App;
