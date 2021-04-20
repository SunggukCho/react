import React, {Component} from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject: {title: "WEB", sub: "World Wide Web"},
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText'},
        { id: 2, title: 'CSS', desc: 'HTML is HyperText'},
        { id: 3, title: 'Javascript', desc: 'HTML is HyperText'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;