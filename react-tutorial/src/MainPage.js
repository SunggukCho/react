import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class MainPage extends Component {
  state = {
    characters: [{
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },],
  }
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
  removeCharacter = (index) => {
    const { characters } = this.state;
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {

    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit} />
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}
export default MainPage;